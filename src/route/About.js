import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 project는 주식의 기초를 알려주는 곳입니다.</p>
      {showDetail && <p>detail값을 true로 설정했습니다.</p>}
    </div>
  );
};

export default About;
