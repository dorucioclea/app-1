import React from 'react';
import newsData from 'dan-api/dummy/newsData';
import Typography from '@material-ui/core/Typography';
import FlashOn from '@material-ui/icons/FlashOn';
import HorizontalNewsCard from '../CardPaper/HorizontalNewsCard';

function NewsListWidget() {
  return (
    <div>
      <Typography gutterBottom variant="h5">
        <FlashOn />
          &nbsp;News Flash
      </Typography>
      {
        newsData.map((item, index) => (
          <div key={index.toString()}>
            <HorizontalNewsCard title={item.title} desc={item.desc} thumbnail={item.thumb} />
          </div>
        ))
      }
    </div>
  );
}

export default NewsListWidget;
