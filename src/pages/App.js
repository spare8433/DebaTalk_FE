import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Test = lazy(() => import('./test'));


function App() {
  return (
    <div className="App">
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
