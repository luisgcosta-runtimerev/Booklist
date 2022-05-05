import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    border: '1px solid darkmagenta'
  },
  textStyle: {
    fontFamily: 'Permanent Marker'
  }
});

export default function BookCard({ handleDelete, handleUpdate, ...props }) {
  const styles = useStyles();
  const { book } = props;
  return (
    <Container>
      <Card elevation={1} sx={{ maxWidth: 275 }} className={styles.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {book.author}
          </Typography>
          <Typography variant="h5" component="div" className={styles.textStyle}>
            {book.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {book.typeBook}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            {book.description}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>ISBN:{book.isbn}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleUpdate(book.isbn)} size="small">
            Update
          </Button>
          <Button onClick={() => handleDelete(book.isbn)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
