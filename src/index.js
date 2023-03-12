import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './HelloComponent';
import Login from './Login';

// const HelloComponent = () => {
//   return <p>Hello Component</p>
// }

class StatefullComponent extends React.Component {
  render() {
      return(
          <div>
              Statefull Component
          </div>
      )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
