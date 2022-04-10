import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from '../styles/theme'



const Test = lazy(() => import('./test'));
const MainHome = lazy(() => import('./MainHome'));
const LoginPage = lazy(() => import('./LoginPage'));

const GlobalStyles = createGlobalStyle`
    ${reset}
    #root{
      width: 100%;
      height: 100%;
    }
    html{
      width: 100%;
      height: 100%;
    }
    .App{
      width: 100%;
      height: 100%;
    }
    body {
      width: 100%;
      height: 100%;
      font-family: 'Noto Sans KR', sans-serif;     
      padding: 0;
      margin: 0;
      background-color: #F5F5F5;
      font-weight: 400;
      box-sizing: border-box;
    }
    div{
      box-sizing: border-box;
    }
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>    
        <Router>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>                 
              <Route path="/" element={<MainHome />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/test" element={<Test />} />
              
            </Routes>
          </Suspense>

           
        </Router>
      </ThemeProvider>   
    </div>
  );
}

export default App;
