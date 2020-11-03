
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList'
import {TaskListProvider} from './context/TasklistContext'
import TaskForm from './components/TaskForm';
import Header from './components/Header'

function App() {
  return (
  
    < TaskListProvider>
      <div className="container">
        <div className='app-wrapper'>
          < Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListProvider>
   
  );
}

export default App;
