import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Board, Tag } from 'react-trello';
import HeaderBoard from './HeaderBoard';
import styles from './taskBoard-jss';

const handleDragStart = (cardId, laneId) => {
  console.log('drag started');
  console.log(`cardId: ${cardId}`);
  console.log(`laneId: ${laneId}`);
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended');
  console.log(`cardId: ${cardId}`);
  console.log(`sourceLaneId: ${sourceLaneId}`);
  console.log(`targetLaneId: ${targetLaneId}`);
};

/* Custom Card */
function CustomCard(props) {
  const {
    classes,
    title,
    label,
    description,
    tags
  } = props;
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.title}>{title}</div>
        <div className={classes.label}>{label}</div>
      </header>
      {tags !== [] && <div className={classes.tags}>{tags.map((tag, index) => <Tag key={index.toString()} {...tag} />)}</div>}
      <div className={classes.content}>
        {description}
      </div>
    </div>
  );
}

CustomCard.propTypes = {
  tags: PropTypes.array,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
};


CustomCard.defaultProps = {
  tags: [],
  label: '',
  description: '',
};

const CustomCardStyled = withStyles(styles)(CustomCard);

function TaskBoard(props) {
  const {
    classes,
    data,
    dataLoaded,
    removeBoard
  } = props;
  const handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  };

  return (
    <div data-loaded={dataLoaded} className={classes.boardWrap}>
      <Board
        editable
        onCardAdd={handleCardAdd}
        data={data}
        draggable
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        customCardLayout
        tagStyle={{ fontSize: '80%' }}
        customLaneHeader={<HeaderBoard removeBoard={removeBoard} />}
        addCardLink={(
          <Button>
            <AddIcon className={classes.leftIcon} />
              &nbsp;Add Task
          </Button>
        )}
      >
        <CustomCardStyled />
      </Board>
    </div>
  );
}

TaskBoard.propTypes = {
  data: PropTypes.object.isRequired,
  removeBoard: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskBoard);
