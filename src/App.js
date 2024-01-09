import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/Register/SignUpNew/RegisterPage';
import CreateAccount from './pages/Register/CreateAccount/CreateAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Signup */}
          <Route path='/register-new' element={<RegisterPage />}></Route>
          <Route path='/create-account' element={<CreateAccount />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
