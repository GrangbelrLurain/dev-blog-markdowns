---
createdAt: 2022-05-25
---

> 참고
> [https://youtu.be/wZiOGxOhJNs](https://youtu.be/wZiOGxOhJNs)

1. startTransition(처리 서순 변경)

```jsx
import { useState, useTransition } from 'react';

function App(){
	let [name, setName] = useState('')
	// isPending: 대체할 내용, startTransition: 로딩될 내용
	let [isPending, startTransition] = useTransition()

	return ( ... )
}

```

1. useDeferrendValue(늦게 처리)

```jsx
import { useState, useDefferrendValue } from 'react';

function App(){
	let [name, setName] = useState('')
	// props로 전달된 state 늦게 처리
	let state = useDeferrendValue(name)

	return (...)
}
```
