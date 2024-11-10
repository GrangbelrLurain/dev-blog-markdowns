---
createdAt: 2023-03-22
---


# 에러 코드

```bash
next-dev.js?3515:20 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
    at TotalProductList (webpack-internal:///./components/organisms/partners/products/total-product-list.tsx:37:19)
    at section
    at PartnersProductTemplate (webpack-internal:///./components/templates/partners-product-template.tsx:22:66)
    at Products
    at section
    at main
    at div
    at div
    at div
    at MainLayout (webpack-internal:///./components/organisms/layout/index.tsx:45:23)
    at PartnersLayout (webpack-internal:///./components/organisms/partners/partners-layout.tsx:41:23)
    at SWRConfig$1 (webpack-internal:///./node_modules/swr/dist/index.mjs:504:23)
    at CookiesProvider (webpack-internal:///./node_modules/react-cookie/es6/CookiesProvider.js:25:28)
    at SessionProvider (webpack-internal:///./node_modules/next-auth/react/index.js:454:24)
    at Provider (webpack-internal:///./node_modules/mobx-react/dist/mobxreact.esm.js:509:24)
    at MyApp (webpack-internal:///./pages/_app.tsx:64:24)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:20742)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:23635)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:111:5)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:296:24)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:504:25)
```

# 원인 1

## 핵심 내용

> useEffect 내부에서 setState가 여러 번 돌아서 생기는 오류

## 설명

```tsx
// ... component
	useEffect(() => {
	if (mPage === 1) {
	    setProducts(products);
	  } else {
	    setProducts((arr) => [...arr, ...products]);
	  }
	}, [products, mPage, updateProducts]);
//  ... component
```

위 코드에서 setProducts가 여러 번 호출되어서 여러 번 랜더링 되어 발생한 오류입니다.

# 해결 1

## 핵심 내용

> setState를 useCallback으로 감싼 후 여러 번 호출 되지 않도록 조건문으로 감쌈

## 설명

```tsx
// ... component
	const updateProducts = useCallback(() => {
	  if (products && products.length) {
	    if (mPage === 1) {
	      setProducts(products);
	    } else {
	      setProducts((arr) => [...arr, ...products]);
	    }
	  } else if (mProducts.length) {
	    setProducts([]);
	  }
	}, [products, mPage, mProducts]);
	
	useEffect(() => {
	  updateProducts();
	}, [products, mPage, updateProducts]);

	const resetPage = useCallback(() => {
	    if (mPage !== 1) {
	      setPage(1);
	    }
	  }, [mPage]);
	
  useEffect(() => {
    resetPage();
  }, [type, sort, keyword, resetPage]);
// ... component
```

setProducts가 조건에 따라 한 번(최대한 적게) 호출 됩니다.

# 원인 2

> 위 해결 코드로는 useCallback의 dependencies로 인해 페이지 변경이 계속해서 초기화 되는 문제가 발생했다.

# 해결 2

> dependencies에 필요한 값만 넣음으로 해결했다.

```tsx
// ... component
	useEffect(() => {
	  if (products && products.length) {
	    if (mPage === 1) {
	      setProducts(products);
	    } else {
	      setProducts((arr) => [...arr, ...products]);
	    }
	  } else if (mPage === 1 && mProducts.length) {
	    setProducts([]);
	  }
	}, [products]);
	
	useEffect(() => {
	  if (mPage !== 1) {
	    setPage(1);
	  }
	}, [type, sort, keyword]);
// ... component
```

useCallback을 사용하지 않고도 setState를 한 번 호출함으로 해결할 수 있어 코드를 수정했다.

(대신 dependency 경고가 떴지만, dependencies 리스트에 state값을 추가하면 무한 랜더 오류가 발생한다.)

# 결론

> Hook을 사용할 땐 한 번만 업데이트 될 수 있게 조건 설정을 잘 하자 (여러 번 랜더링 되고 경고 메세지가 발생할 수 있다.)

![[Pasted image 20241017005724.png]]

이제 경고가 안 뜨는 편안한 콘솔 창