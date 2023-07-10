import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import UserCrud from './components/UserCrud';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/tasks' element={<UserCrud />} />
          <Route path='/addtask' element={<AddTask />} />
          <Route path='/updatetask' element={<UpdateTask />} />
          <Route path='/' element={<AdminDashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
