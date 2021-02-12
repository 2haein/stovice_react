import React from 'react';
import Categories from '../components/news/Categories';
import NewsList from '../components/news/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
