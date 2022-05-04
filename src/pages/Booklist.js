import React, { useContext } from 'react';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@mui/styles';
import BookCard from '../components/BookCard';
import { BookContext } from '../DataContext';

const useStyles = makeStyles({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-30px' /* gutter size offset */,
    width: 'auto'
  },
  myMasonryGridColumn: {
    paddingLeft: '15px' /* gutter size */,
    backgroundClip: 'padding-box'
  },
  note: {
    marginBottom: '15px',
    marginTop: '15px'
  }
});

export default function Booklist() {
  const styles = useStyles();
  const { books, setValues } = useContext(BookContext);
  // eslint-disable-next-line no-console
  console.log('context books:', books);
  console.log('context setValues:', setValues);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        <div className={styles.note}>
          <BookCard />
        </div>
      </Masonry>
    </Container>
  );
}
