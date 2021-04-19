import './App.css';
import Quiz from './Components/Quiz/Quiz';
import Que from './Components/Que/Que';
import Search from './Components/Search/Search';
import Tasks from './Components/Tasks/Tasks';
import Cabinet from './Components/Сabinet/Сabinet';

function App() {
  return (
    <div className="app">      
      <div className="left-column">
      <Search />
      <Cabinet />
      </div>
      <div className="right-column">
      <Que />
      <Tasks />
      <Quiz />
      </div>
    </div>
  );
}

export default App;
