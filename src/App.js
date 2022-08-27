import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import EmployeeHrSignin from './components/EmployeeHrSignin';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EmployeeHrSignUp from './pages/EmployeeHrSignup';
import EmployeeDashboard from './pages/EmployeeDashboard';
import HrDashboard from './pages/HrDashboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<EmployeeHrSignin />} />
        <Route path='/signup' element={<EmployeeHrSignUp />} />
        <Route path='/employee-dashboard' element={<EmployeeDashboard />} />
        <Route path='/hr-dashboard' element={<HrDashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
