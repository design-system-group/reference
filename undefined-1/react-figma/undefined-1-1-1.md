---
description: 로컬에서 작업이 완료된 플러그인을 피그마 클라우드에 배포해보자.
---

# 플러그인 배포하기

피그마를 예로 플러그인 제작부터 배포과정이 어떻게 되는지 살펴보자.

```javascript
import { render, Page } from "react-figma";

render(
	<>
		<Page isCurrent name="App">
			<App />
		</Page>
		<Page name="App2">
			<App2 />
		</Page>
	</>
);

```

 `App` `App2` 라는 두개의 테스트 컴포넌트를 피그마에 렌더링 하려면 위와 같은 코드가 필요하다.

![&#xD53C;&#xADF8;&#xB9C8;&#xC758; &#xD50C;&#xB7EC;&#xADF8;&#xC778; Publish &#xBA54;&#xB274;](../../.gitbook/assets/image%20%285%29.png)

 개발중인 플러그인이 테스트가 완료되면 위와 같이 피그마 클라우드에 플러그인을 배포할 수 있다. Publish를 눌러 배포를 하게 되면 아래와 같이 배포된 플러그인을 설치 할 수 있다.

![&#xD53C;&#xADF8;&#xB9C8; &#xD074;&#xB77C;&#xC6B0;&#xB4DC;&#xC5D0; &#xBC30;&#xD3EC;&#xB41C; &#xD50C;&#xB7EC;&#xADF8;&#xC778;](../../.gitbook/assets/image%20%287%29.png)

 이제 누구든지 이 플러그인을 설치하면 아까 우리가 로컬에서 만들었던 `App` , `App2` 컴포넌트를 불러올 수 있다. 실제로 플러그인을 설치해보자.

![&#xB85C;&#xCEEC;&#xC5D0; &#xC124;&#xCE58;&#xB41C; &#xD53C;&#xADF8;&#xB9C8; &#xD50C;&#xB7EC;&#xADF8;&#xC778;](../../.gitbook/assets/image%20%284%29.png)

이 설치된 플러그인을 피그마 데스크탑에서 불러와보자.

![](../../.gitbook/assets/image%20%286%29.png)

 그럼 아래와 같이 App과 App2 컴포넌트 두개가 그대로 들어있다.

![&#xD53C;&#xADF8;&#xB9C8;&#xC5D0; &#xB80C;&#xB354;&#xB9C1;&#xB41C; &#xB9AC;&#xC561;&#xD2B8; &#xCEF4;&#xD3EC;&#xB10C;&#xD2B8;](../../.gitbook/assets/image%20%283%29.png)



### [Written by 심재철](https://github.com/simsimjae)

![](../../.gitbook/assets/simsimjae.png)

