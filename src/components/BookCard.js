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

export default function BookCard(props) {
  const onClickHandler = () => console.log('clicked');
  console.log('props: ', props);
  const styles = useStyles();

  return (
    <Container>
      <Card elevation={1} sx={{ maxWidth: 275 }} className={styles.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div" className={styles.textStyle}>
            hi
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">hi</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onClickHandler} size="small">
            Update
          </Button>
          <Button onClick={onClickHandler} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
