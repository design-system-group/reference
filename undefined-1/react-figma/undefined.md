---
description: react-figma가 어떻게 구성되어있고 작동하는지를 알아보자.
---

# 작동방식

`main context` 와 `UI context` 라는 두개의 컨텍스트가 존재함.

`Main context` 에서는 피그마 플러그인 API를 사용할 수 있음. `UI context` 에서는 자바스크립트 API를 사용할 수 있음.

![](../../.gitbook/assets/image%20%282%29.png)

Main Context와 UI Context는 서로 이벤트 기반의 메세징 시스템으로 통신한다.

## 세가지 흔한 케이스

### figma document에서 데이터를 가져와서 플러그인 UI에서 보여주고 싶은 경우

1. main context에서 UI를 보여주는 함수를 호출한다.
2. main context에서 데이터를 읽은 다음 UI 컨텍스트에 전달함.
3. 데이터를 iframe\(ui context\)에서 읽음.

### 사용자에게 입력받은 데이터 figma document에서 사용하고 싶은 경우

1. main context에서 UI를 보여주는 함수를 호출한다.
2. iframe내부에서 form을 통해 데이터를 입력받고
3. ui context -&gt; main context로 전달한다.

### API 호출로 가져온 데이터를 figma document에서 사용하고 싶은 경우

1. main context에서 UI를 보여주는 함수를 호출한다.
2. main context -&gt; UI context로 API 호출 요청
3. UI context에서 API 호출 후 받아온 데이터를 다시 main context로 넘김
4. main context에서 데이터 사

## Figma Plugin이 할수있는것과 없는것

### 할 수 있는것

* 현재 오픈된 figma document를 읽고 조작할 수 있음\(pages, layers, components, layers\)
* iframe에서 할 수 있는 모든 것
* Modal을 띄울 수도 있

### 할 수 없는것

* 열려있지 않은 figma document에 대한 조작



### [Written by 심재철](https://github.com/simsimjae)

![](../../.gitbook/assets/simsimjae.png)

