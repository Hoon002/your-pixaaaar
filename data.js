const qnaList = [
    {
      q: '나는 팀플을 할 때...',
      a: [
        { answer: 'a. 빠르고 효율적으로 줌을 켜서 회의 하고 바로 쉰다', type: ['mike, carl'] },
        { answer: 'b. 조금 멀지만 카페에서 팀원들이랑 만나고 밥도 같이 먹으며 친분을 쌓는다.', type: ['joy', 'woody'] }
      ]
    },
    {
      q: '새내기가 되었다...',
      a: [
        { answer: 'a. 학교 다니다 보면 누군가는 만나겠지..', type: ['mike, carl'] },
        { answer: 'b. 새터, OT에 무조건 나가면서 친구를 찾는다.', type: ['joy', 'woody'] }
      ]
    },
    {
      q: '과 단체 회식이 잡혔다...',
      a: [
        { answer: 'a. 돈과 시간이 아까우므로 집에 있는다.', type: ['mike', 'carl'] },
        { answer: 'b. 새로운 사람을 만날 절호의 기회!', type: ['joy', 'woody'] }
      ]
    },
    {
      q: '팀플에서 리더를 맡았다...',
      a: [
        { answer: 'a. 팀원들을 이끌며 우리 팀을 최고로 만들고자 한다', type: ['mike', 'joy', 'woody']},
        { answer: 'b. 팀을 1등으로 만드는 길은 내가 묵묵히 팀장을 서포트 하는 길', type: ['carl'] }
      ]
    },
    {
      q: '나의 어릴적 사진을 우연히 보았다...',
      a: [
        { answer: 'a. 그 땐 그랬지 하면서 추억에 깊게 잠긴다', type: ['carl', 'joy']},
        { answer: 'b. 그 땐 귀여웠었지 생각 하며 그리 오래 보지 않는다', type: ['mike', 'woody'] }
      ]
    },
    {
      q: '연애에 있어서 나는...',
      a: [
        { answer: 'a. 안정적이고 오래가는 연애를 추구', type: ['mike, joy']},
        { answer: 'b. 비록 짧더라도 강렬한 연애를 추구', type: ['woody', 'carl'] }
      ]
    },
    {
      q: '슬퍼하는 친구를 보고 위로가 필요함을 느꼈다...',
      a: [
        { answer: 'a. 그 친구가 울면 같이 울며 공감해준다', type: ['mike', 'joy']},
        { answer: 'b. 뭐 때문에 그렇게 슬퍼하냐며 조심스레 물어본다', type: ['woody', 'carl'] }
      ]
    },
  ]
  
  const infoList = [
    {
      name: '<우디>',
      desc: '-토이스토리 시리즈-<br>주변 사람들의 특징과 장점을 잘 이해하고 있고 그들을 격려할 줄 아는 리더 기질<br>욕심 많고 질투가 많아 사람들과의 갈등이 잦지만 먼저 나서서 화해를 요청하는 멋쟁이<br>“우리는 앤디의 장난감들이니까!”: 잘날척하는 것처럼 보여도 책임감 넘치고 희생 정신이 투철한 보안관'
    },
    {
      name: '<칼 할아버지>',
      desc: '-업-<br>아내 엘리와 집에서나 일터에서나 언제나 함께하는 아내 바라기 남편 스타일<br>파라다이스 폭포에 같이 가기로 했던 아내와의 약속을 위해 집을 헬륨 풍선으로 날려버릴 생각을 한 아이디어 뱅크<br>하지만 아내와의 추억으로 주변을 개발하는데 집을 팔지 못하며 양로원에 가길 끝내 거부하는 고집이 센 스타일..'
    },
    {
      name: '<마이크>',
      desc: '-몬스터 주식회사/몬스터 대학교-<br>“나는 최고의 겁주기 선수가 될거야!”: 큰 꿈을 가지고 그것을 이루기 위해 직진하는 스타일<br>때로는 한계에 부딪혀 크게 절망을 하기도 하는 완벽주의적 성격<br>대학에서 퇴학당하고 몬스터 주식회사의 잡일부터 시작해 겁주기 선수 매니저까지! 자신을 잘 알고 있고 그것을 최대한 활용하려하며 긍정 마인드의 소유자'
    },
    {
      name: '<기쁨이>',
      desc: '-인사이드아웃-<br>라일리에게 행복한 기억만을 주고 싶어 하는 것처럼 주변 사람과 불화가 없길 바라는 스타일<br>하지만 슬픈 기억이 있어야 라일리가 샌프란시스코에서 성장하듯 언제나 행복할 수만은 없다는 사실'
    },
  ]