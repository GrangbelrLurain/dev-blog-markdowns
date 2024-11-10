---
createdAt: 2023-03-10
---

## MVC, MVP의 차이점

- 책임
    
    MVC에서 컨트롤러는 사용자 입력을 처리하고 뷰와 모델을 업데이트하는 일을 담당합니다. 반대로 MVP에서는 프리젠터가 사용자 입력 처리 및 모델 업데이트를 담당하고 뷰는 UI 렌더링을 담당합니다.
    
- 통신
    
    MVC에서는 컨트롤러가 뷰 및 모델과 직접 통신하지만 MVP에서는 프리젠터가 뷰와 모델 간의 중재자 역할을 하므로 뷰와 모델이 직접 통신하지 않습니다. .
    
- 테스트
    
    프리젠터가 응용 프로그램 논리를 처리하여 구성 요소를 개별적으로 테스트하기 쉽기 때문에 MVP는 일반적으로 MVC보다 더 테스트하기 쉬운 것으로 간주됩니다. 또한 뷰와 모델은 MVP에서 서로 직접 통신하지 않기 때문에 한 구성 요소를 변경해도 다른 구성 요소에 영향을 미치지 않습니다.
    

MVC와 MVP 두 패턴의 구현은 비슷합니다. 예를 들어 MVC에서 컨트롤러에는 사용자 입력을 처리하고 모델과 보기를 업데이트하는 메서드가 있습니다. 반대로 MVP에서는 프리젠터가 사용자 입력을 처리하고, 모델을 업데이트하고, 뷰를 업데이트하게 됩니다.

다음은 TypeScript에서 두 패턴을 구현하는 방법의 예입니다.

### MVC 패턴

```tsx
class Model {
  // represents the application data
}

class View {
  // responsible for rendering the UI
}

class Controller {
  constructor(model: Model, view: View) {
    // listens for user input and updates the model and view accordingly
  }
}
```

### MVP 패턴

```tsx
class Model {
  // represents the application data
}

class View {
  // responsible for rendering the UI
}

class Presenter {
  constructor(model: Model, view: View) {
    // listens for user input and updates the model
  }

  updateView() {
    // updates the view to display the updated information
  }
}
```