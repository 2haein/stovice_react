import React, { useCallback, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './route/About';
import Button from '@material-ui/core/Button';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import Home from './route/Home';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Profiles from './route/Profiles';
// import axios from '../node_modules/axios/index';
// import NewsPage from './pages/NewsPage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
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
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '스토비스 경제 주식알리미',
      checked: false,
    },
    {
      id: 2,
      text: '관련 일정을 입력해주세요',
      checked: false,
    },
    {
      id: 3,
      text: '추가 및 수정이 가능합니다',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <>
      <div className={classes.root}>
        <AppBar height="true" className="App" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              스토비스
            </Typography>
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
      </div>
      <div className="App-content">
        {/* <Route path="/:category?" component={NewsPage} /> */}
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/reigster" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </div>
      <div className="App-bottom">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Button
          className="Main-link"
          variant="contained"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://resume.stovice.com"
        >
          Stovice 창립자 CEO 링크글 참고.
        </Button>
      </div>
    </>
  );
};

export default App;
