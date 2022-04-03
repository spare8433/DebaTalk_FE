import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from '../styles/theme'

import { Header } from '../components/header';

const Test = lazy(() => import('./test'));
const MainHome = lazy(() => import('./mainHome'));

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
      font-family: 'Noto Sans KR', sans-serif;     
      padding: 0;
      margin: 0;
      background-color: #F5F5F5;
      font-weight: 400;
      box-sizing: border-box;
    }
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header></Header>
        <Router>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>                 
              <Route path="/" element={<MainHome />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Suspense>   
        </Router>
      </ThemeProvider>   
    </div>
  );
}

export default App;
