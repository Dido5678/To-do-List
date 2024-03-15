import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div className='butterfly-block'>
        <img src='./butterfly.png' alt='butterfly' className="butterfly"/>
      </div>
      <div className='section'>
        <TodoWrapper  />
      </div>   
    </div>
  );
};

export default App;