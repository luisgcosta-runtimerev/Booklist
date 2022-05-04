import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function BookCard(props) {
  const onClickHandler = () => console.log('clicked');
  console.log(props);
  return (
    <Container>
      <Card elevation={1} sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
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
