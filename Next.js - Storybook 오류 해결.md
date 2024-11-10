---
createdAt: 2022-05-27
---
*문제 : Storybook에서 Next.js 모듈 정보를 읽을 수 없음. *해결 : Webpack Api를 활용해 mock module에 연결하여 해결한다.

```jsx
// __mocks__/next/router.js
export const useRouter = () => ({
  route: ‘/’,
  pathname: ‘’,
  query: ‘’,
  asPath: ‘’,
  prefetch: () => {},
  push: () => {},
});
export default { useRouter };

// __mocks__/next/link.js
import React from ‘react’;
export default function ({ children }) {
  return <a>{children}</a>;
}

// __mocks__/next/image.js
import React from ‘react’;
export default function (props) {
  return <img {…props} />
}
```

```jsx
// .storybook/main.js
module.exports = {
  // …your config
  webpackFinal: (config) => {
    config.resolve.alias[‘next/router’] = require.resolve(‘../__mocks__/next/router.js’);
    config.resolve.alias[‘next/link’] = require.resolve(‘../__mocks__/next/link.js’);
    config.resolve.alias[‘next/image’] = require.resolve(‘../__mocks__/next/image.js’);
    return config;
  },
};
```

### 해결 : Storybook-addon-next를 사용하여 해결

(storybook-addon-next-router 및 postcss 삭제)