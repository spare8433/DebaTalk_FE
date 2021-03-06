import { AuthRoute } from "@components/AuthRoute";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from '../styles/theme'

const Test = lazy(() => import('./test'));
const Test2 = lazy(() => import('./test2'));
const MainHome = lazy(() => import('./MainHomePage'));
const LoginPage = lazy(() => import('./LoginPage'));
const SginUpPage = lazy(() => import('./SignUpPage'));
const AdminPage = lazy(() => import('./AdminPage'));
const ProfilePage = lazy(() => import('./ProfilePage'));
const DebateForumPage = lazy(() => import('./DebateForumPage'));
const DebateTopicBoardPage = lazy(() => import('./DebateForumPage/DebateTopicBoardPage'));
const CommunityPage = lazy(() => import('./CommunityPage'));
const TotalSearchPage = lazy(() => import('./TotalSearchPage'));

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
    a {
      color:black;
      text-decoration: none;
      outline: none}
    a:hover, a:active {
      color:black;
      text-decoration: none;

    }
    div{
      box-sizing: border-box;
    }
    select,input,textarea{
      font-family: 'Noto Sans KR', sans-serif;   
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
              
              <Route path="/" version={1} element={<MainHome />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SginUpPage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/test2" element={<Test2 />} />
              <Route path="/admin/*" element={<AuthRoute><AdminPage /></AuthRoute>} />
              <Route path="/profile" element={<AuthRoute><ProfilePage /></AuthRoute>} />
              <Route path="/debate-forum/*" element={<DebateForumPage />} />
              <Route path="/debate-topic-board" element={<DebateTopicBoardPage />} />
              <Route path="/community/*" element={<CommunityPage />} />
              <Route path="/total-search" element={<TotalSearchPage />} />
              
            </Routes>
          </Suspense>

           
        </Router>
      </ThemeProvider>   
    </div>
  );
}

export default App;
