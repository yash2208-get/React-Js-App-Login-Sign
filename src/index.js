import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sigin from './componet/Sigin';
import Res from "./basic/Res";
// import Login from './componet/Login';
import reportWebVitals from './reportWebVitals';
import  Login  from './componet/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
          <Route path="aa" element = {<Login/>} />
          <Route path="/sigin" element = {<Sigin/>} />
          <Route path="/Roud" element = {<Res/>} />
          {/* <Route path="aa"><Login/></Route> */}

      </Routes>
    </BrowserRouter>

  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();