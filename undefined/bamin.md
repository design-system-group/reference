# 우아한형제들

## [우아한 형제들의 디자인 시스템](https://velog.io/@velopert/%EC%9B%90%ED%8B%B0%EB%93%9C-%EC%9A%94%EC%A6%98-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EC%A7%80-%EC%B0%B8%EA%B4%80-%ED%9B%84%EA%B8%B0#%EC%9A%B0%EC%95%84%ED%95%9C%ED%98%95%EC%A0%9C%EB%93%A4---%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9C%BC%EB%A1%9C-%EA%B0%80%EB%8A%94-%EA%B8%B8)

### 배달의 민족에서 디자인 시스템을 적용하기로 한 이유

#### 1. 묘하게 다른 디자인

A페이지에 사용되는 컴포넌트와 B페이지에서 사용되는 컴포넌트를 작업한 **디자이너가 달라서** 유사하지만 미세하게 다른 디자인이 계속해서 생산되고 있었다.

#### 2. QA과정을 없애기 위해

디자이너의 의도를 프론트 개발자가 잘 파악하지 못해서 실제 결과와 디자인 사이의 조금씩 차이가 생긴다. 이런일이 생기는 이유는 디자이너는 비트맵을 생산하기 때문에 실제 워킹되는 상황에서의 다양한 상황을 상상하기 힘들기 떄문이다. 또한, 어떤 부분을 중요하게 생각하는가에 대한 개발자와 디자이너의 차이 때문에 **디자인과 실제 코딩된 결과가 차이가 있을 수 밖에없다.**

어떤경우엔, 디자이너가 실제로 돌아가는 화면을 보니 마음에 안들어서 다시 디자인 재검토 혹은 심지어 기획 재검토까지 하는 일이 다반사이다. 이런 경우에 서로 더 나은 대안이 있다는걸 알지만 오픈 일정 압박때문에 우선 배포를 하고 나중엔 잘하자고 결심하지만 또 같은 일이 반복된다.

기획 - 디자인 - 프론트개발 - 백엔드개발 - 기능QA - **디자인QA** - 릴리즈

이 단계에서, **디자인QA**단계를 없애기만해도 이 프로세스에 굉장히 큰 효율성을 가져다 줄 수 있다. 디자이너가 디자인 할떄부터 실제 코드로 작동하는 컴포넌트를 가지고 한다면 다시 프로세스가 롤백되는 일이 현저히 줄어들어든다. 만약 디자인 시스템이 잘 정립된다면 이런 **디자인QA**에서의 시간낭비를 크게 줄일 수 있을거라 생각했다.

#### 3. 페이지별 PV 차이

Page View가 높은 페이지들에 사용되는 컴포넌트들은 많은 관심을 받기 때문에 최신화 되어 있고 트렌디하다. 하지만 그렇지 않은 페이지들은 예전에 만들어둔것들이 업데이트 되지 않고 계속해서 서비스 되고 있다. \(예를들면, 마이페이지\) 이 차이를 극복하여 유저가 일관된 디자인경험을 할 수 있도록 만들기 위해 디자인 시스템을 만들고자 했다.

결과적으로 배민에서는 서비스내의 **디자인의 일관성**과 **작업 프로세스의 효율성** 이 두가지를 위해서 디자인 시스템을 도입했다고 할 수 있다.

### 디자인 시스템 적용의 어려움

이 시스템이 왜 필요한지 디자이너들을 설득하는데도 사내 교육을 통해 많은 시간을 써야 했다. 도입에 약 2년 이상이 소요되었으며, 디자이너들에게 디자인 시스템 구축에 필요한 코딩 지식과 Framer X 교육에 많은 시간을 쏟았다. 조직의 전폭적인 지원이 있어야하고 실패하기 쉬운 개발 외적인 이슈들이 굉장히 많다. 그래서 우리는 점진적으로 도입하고 있다.

### 배달의 민족에서 디자인 시스템 구현 방식

airbnb에서 만든 [React Sketch.app](https://github.com/design-system-group/reference/tree/126355de0a56dddf5bd5d1bc73af0fb872f2df14/markdown/cases/react-sketch-app.md)\(이하 스케치앱\)를 사용해서 리액트 컴포넌트를 스케치로 불러와서 작업했다. 스케치앱은 버전 43부터 파일을 저장할때 [JSON으로 저장한다고 한다.](https://developer.sketch.com/file-format/)

#### 사전 지식

1. 스케치앱을 통해 디자인을 JSON의 형태로 export할 수 있다.
2. JSON을 해석해서 리액트 컴포넌트로 변환하기 위해 **Meta Lang**이라고 하는것이 존재한다.

#### 디자인 시스템 프로세스

1. 디자이너가 디자인하는 순간 실제 컴포넌트를 import하여 디자인한다.
2. 불러온 컴포넌트를 수정하거나 조합하여 새롭게 **JSON 형태로 export**한다.
3. **Meta Lang**을 통해 리액트 코드로 변환하고
4. **NPM Private Repository**에 배포 하면 Framer X, Storybook, APP등에서 import해서 사용한다.

#### 구현된 추가 기능들

1. 디자인 시스템에 있는 컴포넌트들을 스케치에서 브라우징 해볼수도 있다.
2. Meta Lang → 리액트 컴포넌트 자동 변환은 아직 구현하지 못했다. 지금은 팀을 만들어서 수동으로 하고 있다.
3. 스케치만 가지고선, 실제 환경에서 돌아가는 디자인 상태를 볼 수 없어서 **스토리북**으로 퍼블리싱해서 실제 환경에서 볼 수 있도록 구성했다.

#### 시스템 요약

**Design** → JSON Export → Meta Lang → **React Component**

## [Written by 심재철](https://github.com/simsimjae)

![](../.gitbook/assets/simsimjae.png)

