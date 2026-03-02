import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//     root.render(
//       <React.StrictMode>
//         {/* <App /> */}
//         <p>현재시각: {(new Date()).toLocaleString()}</p>
//       </React.StrictMode>
//     );
// }, 1000);

const content = `<h3>WINGS 프로젝트</h3><img src="https://wings.msn.to/image/wings/jpg"/>`;
root.render(
  <React.StrictMode>
    {/* <p>{content}</p>  문자열 삽입할 때 이스케이프 처리*/}
    <p dangerouslySetInnerHTML={{__html: content}}></p>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
