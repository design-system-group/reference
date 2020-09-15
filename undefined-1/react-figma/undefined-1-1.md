---
description: react-figma적용에 어떤 한계가 있는지 알아보자.
---

# 한계점

##  1. react-primitives가 베타버전이다.

 리액트 컴포넌트를 디자인툴\(피그마, 스케치등\)에서 렌더링하기 위해서는 아래처럼 두가지 선택지가 있다.

```javascript
import { View, Text, StyleSheet } from "react-figma"; // 피그마에 렌더링
import { Text, Artboard } from 'react-sketchapp'; // 스케치에 렌더링
import { View, Text, StyleSheet } from "react-primitives"; // 플랫폼 상관없이 렌더
```

두 라이브러리에서 제공하는 컴포넌트만을 사용해야 한다. **react-figma, react-sketchapp**도 내부적으로는 **react-primitives**를 사용한다.

### **컴포넌트의 종류가 한정적이다. \(**react-primitives\)

####  react-primitives에서 제공하는 컴포넌트 목

* Animated: [animated](https://github.com/animatedjs/animated) 프로젝트에서 가져옴.
* StyleSheet: React Native 스타일의 API를 똑같이 따라 만들었음.
* View: 레이아웃의 기본이 되는 컴포넌트
* Text: 텍스트 컴포넌트
* Image: 이미지 컴포넌트
* Touchable: 인터렉션 컴포넌트
* Easing: `easing functions`의 모음집
* Dimensions: 디바이스 dimensions를 가져옴
* PixelRatio: 디바이스의 픽셀 density를 가져옴
* Platform: iOS, Android, Web, Sketch ... 와 같은 플랫폼 중 현재 어떤 플랫폼에서 이 라이브러리가 실행되고 있는지를 가져옴.

이 라이브러리에서 제공하는 컴포넌트들은 **"유니버셜 렌더링"**이라고 해서 플랫폼에 상관없이 리액트 컴포넌트를 작성할수 있게 해준다.  라이브러리 자체가 많은 케이스를 고려해야 하기 때문에 이런 한계가 존재 할 수 밖에 없다.

심지어 2020.09월 기준으로 **Input 컴포넌트도 존재하지 않는다고 한다.** 물론 이벤트핸들러를 View에 달아서 어찌 구현은 할 순 있겠지만 다른 라이브러리들과의 충돌 가능성도 존재한다. 

**공식문서에서는 99%이상의 유즈케이스를 해결해줄 수 있다**고 주장하긴 하지만 실제로 어느정도 까지 커버해주는지는 오랜기간 사용해봐야할 것 같다.

### **시맨틱 마크업 또한 불가능하다.** 

이 라이브러리는 시맨틱 마크업은 크게 고려하지 않은 듯 하다. 이 부분은 SEO에 영향을 미치기 때문에 신중히 고려해야한다. 

## 2. 플러그인 배포 과정이 불편하다.

{% page-ref page="undefined-1-1-1.md" %}

플러그인 배포 과정은 대략 위와 같다.

대략 다음과 같은 프로세스가 반복 될 것이라 예상된다. 

1. 디자이너가 플러그인을 설치한다.
2. 플러그인에 있는 리액트 컴포넌트를 피그마에 렌더링한다.
3. 컴포넌트를 수정하고 제플린으로 export한다.
4. 개발자가 제플린을 보고 컴포넌트를 수정한 뒤 스토리북을 업데이트한다.
5. 개발자가 피그마 데스크탑에서 플러그인을  불러온 다음, 피그마 클라우드에 publish한다.
6. 디자이너는 플러그인을 삭제 후 재설치한다.

 문제는, **개발자가 두 곳\(피그마, 스토리북\)을 관리해야한다**는것이고 **디자이너들은 새롭게 반영된 플러그인을 재설치**해야하는 불편함이 존재한다. \(피그마에서 플러그인 자동 업데이트 기능을 제공하지 않는 것 같다.\) **새롭게 배포된 플러그인은 재설치 했을때만 업데이트 되는 현상을 확인했다.**

 혹시 발견하지 못한 플러그인 배포 방법을 찾아보던 찰나, 공식문서에 다음 문장을 발견하였다.

> Users must use the Desktop App to develop plugins. [Download the Figma Desktop app](https://www.figma.com/downloads/). The Desktop App is only available for macOS and Windows.
>
>  You can only submit plugins from the [Figma Desktop app](https://help.figma.com/hc/en-us/articles/360039823654).



 **플러그인 개발과 배포를 위해선 반드시 Figma Desktop App을 사용해야 한다.** 

**즉 cli를 통한 배포 자동화가 불가능 하다는 얘기다.**



**위와 같은 한계점을 알고나서도 프로젝트에 적용해보고 싶은 사람만 다음글을 읽자.**

\*\*\*\*

\*\*\*\*

### [Written by 심재철](https://github.com/simsimjae)

![](../../.gitbook/assets/simsimjae.png)





