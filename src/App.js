import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import UserCrud from './components/UserCrud';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <UserCrud /> */}
      <AddTask />
    </div>
  );
}

export default App;
