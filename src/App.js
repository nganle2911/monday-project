import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/Register/SignUpNew/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Signup */}
          <Route path='/register-new' element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
