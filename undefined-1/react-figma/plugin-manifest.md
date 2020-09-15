---
description: 피그마 플러그인의 Manifest 파일에 대해서 알아보자.
---

# Plugin Manifest

```javascript
{
  "name": "MyPlugin",
  "id": "737805260747778092",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html"
}
```

* name: 여기에 적어준 이름이 피그마에서 플러그인 이름으로 표시된다.
* id: 피그마가 할당하는 자동 생성 값이다. \(플러그인 버전 관리겸 하는듯\)
* api: 피그마 플러그인 API의 버전을 나타낸다. \(자동으로 업데이트되지 않아서 수동으로 최신화\)
* main: main context 코드가 있는 경로
* ui: 아이프레임에서 사용하는 html 파일의 상대 경로

### ui 옵션

**src/code.tsx**

```javascript
import { setupMainThread } from "react-figma/rpc";

figma.showUI(__html__, { visible: false });

setupMainThread();

```

main context가 작동하는 코드는 이렇게 생겼다.

\_\_html\_\_부분에 우리가 manifest에서 설정했던 html파일이 문자열 형태로 들어가게 된다.

