import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './route/About';
import './App.css';
import Home from './route/Home';
import Profiles from './route/Profiles';
import Schedule from './route/Schedule';
import Button from '@material-ui/core/Button';
// import axios from '../node_modules/axios/index';
// import NewsPage from './pages/NewsPage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <div className="App-content">
        <Route path="/schedule" component={Schedule} />
        {/* <Route path="/:category?" component={NewsPage} /> */}
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </div>
      <div className="App-bottom">
        <p className="info">스토비스 | 서울특별시</p>
        <p className="info">
          개인정보책임자: 스토비스 | 이메일: hyunin2021@gmail.com
        </p>
        <p className="info">©스토비스.All Rights Reserved.</p>

        <ul>
          <li>
            <Link to="/">홈으로 가기</Link>
          </li>
          <li>
            <Link to="/schedule">SCHEDULE LINK</Link>
          </li>
          {/* <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li> */}
          <li>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              target="_blank"
              href="https://resume.stovice.com"
            >
              Stovice 관련 링크글 참고.
            </Button>
          </li>
        </ul>
        <hr />

        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
      </div>
    </>
  );
};

export default App;
