import React from 'react';
import styled from 'styled-components';
import axios from '../../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  // margin: 0 auto;
  // margin-left: 5rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https:via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return axios.get(
      `${proxyUrl}https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b9a33c7ed46f4792b560f9fd919f2535`,
    );
  }, [category]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b9a33c7ed46f4792b560f9fd919f2535`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중....</NewsListBlock>;
  }
  if (!response) {
    return null;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
