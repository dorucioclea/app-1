import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Blog from '../Templates/Blog';
import { ThemeContext } from './ThemeWrapper';
import { BlogHome, Article } from '../pageListAsync';

function ArticleNews(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Blog history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path="/blog" component={BlogHome} />
        <Route path="/blog/article" component={Article} />
      </Switch>
    </Blog>
  );
}

ArticleNews.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ArticleNews;
