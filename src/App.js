import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';v

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const classes = useStyles();


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
        href="https://resume.stovice.com">
      Stovice 창립자 CEO 링크글 참고.
    </Button>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
      </header>
     
    </div>
  );
}

export default App;
