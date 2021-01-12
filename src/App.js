import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          스토비스 오픈 준비중
        </p>
        <TodoListTemplate>
        aasdsda
      </TodoListTemplate>
       
        <Button variant="contained" color="primary" target="_blank" rel="noopener noreferrer"
        href="https://hyunin2021.github.io/stovice/">
      Stovice 창립자 CEO 링크글 참고.
    </Button>
      </header>
     
    </div>
  );
}

export default App;
