import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Header } from '../components/header';

const Test = lazy(() => import('./test'));


const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
      font-family: 'Noto Sans KR', sans-serif;     
      padding: 0;
      margin: 0;
      background-color: #F5F5F5;
      font-weight: 400;
    }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header></Header>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>                 
            <Route path="/" element={<Test />} />
          </Routes>
        </Suspense>   
      </Router>   
    </div>
  );
}

export default App;
