import React, { useContext } from 'react';
import { Container, Typography, Link } from '@mui/material';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
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
  const { books, setValueRemove } = useContext(BookContext);
  const navigate = useNavigate();
  // eslint-disable-next-line no-console
  console.log('booklist books:', books);

  const handleDelete = (isbn) => {
    setValueRemove(books.filter((book) => book.isbn !== isbn));
  };
  const handleUpdate = (isbn) => {
    navigate(`/create/${isbn}`);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2
  };
  return (
    <Container>
      {books.length === 0 ? (
        <Typography
          component="h2"
          variant="h5"
          align="center"
          sx={{ marginTop: '30px' }}
        >
          Sorry, I dont have books to show. Please{' '}
          <Link href="/create">add one</Link>
        </Typography>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
          {books.map((book) => (
            <div className={styles.note} key={book.isbn}>
              <BookCard
                book={book}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </div>
          ))}
        </Masonry>
      )}
    </Container>
  );
}
