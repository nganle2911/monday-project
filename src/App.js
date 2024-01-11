import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/Register/SignUpNew/RegisterPage';
import CreateAccount from './pages/Register/CreateAccount/CreateAccount';
import Question1 from './pages/Register/Question1/Question1';
import Question2 from './pages/Register/Question2/Question2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Signup */}
          <Route path='/register-new' element={<RegisterPage />}></Route>
          <Route path='/create-account' element={<CreateAccount />}></Route>
          <Route path='/flow-question-1' element={<Question1 />}></Route>
          <Route path='/flow-question-2' element={<Question2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
