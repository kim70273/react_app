import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//만든 컴포넌트를 사용하기 위해 import


ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')//id가 root인 곳에 넣겠다.
  //<App />와 같은것을 컴포넌트라 하고 리액트는 컴포넌트와 동작한다. 우리는 컴포넌트를 만들 것이다.
  //컴포넌트는 HTML을 반환하는 함수.
  //리액트 어플리케이션이 하나의 컴포넌트만 랜더링 할 수 있다. -> App안에서 Potato를 넣어 줄 수 있다.
);

