const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = 7;
var select = [];


function setResult() {
    let point = callResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/' + point + '.png';

    resultImg.src = imgURL;
    resultImg.classList.add('img-fluid');
    
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');

    resultDesc.classList.add('mt-5')
    resultDesc.innerHTML = infoList[point].desc;

}

function callResult() {
    var pointArray = [
        {name : 'woody', value : 0, key : 0},
        {name : 'carl', value : 0, key : 1},
        {name : 'mike', value : 0, key : 2},
        {name : 'joy', value : 0, key : 3}
    ]

    for (let i = 0; i < endPoint; i++){
        var target = qnaList[i].a[select[i]];

        for(let j = 0; j < target.type.length; j++) {
            for(let k = 0; k < pointArray.length; k++) {
                if (target.type[j] === pointArray[k].name){
                    pointArray[k].value += 1
                }
            }
        }
    }

    var resultArray = pointArray.sort(function (a, b) {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    })
    let resultWord = resultArray[3].key;
    console.log(resultWord);
    console.log(pointArray);
    return resultWord;
}



function goResult() {
    qna.style.WebkitAnimation = "fade_out 1s";
    qna.style.animation = "fade_out 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fade_in 1s";
        result.style.animation = "fade_in 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)})
    console.log(select);
    setResult();
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('fadeIn')

    a.appendChild(answer); // .answerBox <div> 아래에 자식 태그로 <button>이 생김
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fade_out 0.5s";
            children[i].style.animation = "fade_out 0.5s";
        }
        setTimeout(() => {
            select[qIdx] = idx;
            for(let i = 0; i <children.length; i++){
                children[i].style.display = 'none';
            }
            
            goNext(++qIdx);
        }, 450)
    }, false);

}

function goNext(qIdx){

    if(qIdx === endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');

    q.classList.add('questionList');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar')
    status.style.width = (100/endPoint) * (qIdx+1) + '%'; // qIdx는 0, 1, 2니까 +1 해줌
}

function begin(){
    main.style.WebkitAnimation = "fade_out 1s";
    main.style.animation = "fade_out 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fade_in 1s";
        qna.style.animation = "fade_in 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450)

        let qIdx = 0;
        goNext(qIdx);
    }, 450)
}