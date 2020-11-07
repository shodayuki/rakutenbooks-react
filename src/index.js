import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <HelloWorldChild />
      </div>
    );
  }
}

const HelloWorldChild = () => {
  return (
    <h1 class="l-headerTitle"> Hello World</h1>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
