import {
  Button,
  Container,
  TextField,
  Typography,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormHelperText
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { BookContext } from '../DataContext';
import Form from '../components/Form';

const schema = yup.object().shape({
  author: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Author should not contain numbers')
    .required('Author is a required field'),
  title: yup.string().required('Title is a required field'),
  isbn: yup
    .number()
    .typeError('You need to insert a number')
    .required('ISBN is a required field'),
  description: yup.string(),
  optShow: yup.bool(),
  typeBook: yup.string().required()
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2, 0, 2)
  }
}));

export default function Createbook() {
  const { books, setValues, setValueRemove } = useContext(BookContext);
  const { id } = useParams();
  const book = books.filter((bookId) => bookId.isbn === parseInt(id, 10));
  const [value, setValue] = useState(book[0]?.optShow || false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      author: book[0]?.author,
      title: book[0]?.title,
      isbn: book[0]?.isbn,
      description: book[0]?.description,
      optShow: book[0]?.optShow,
      typeBook: book[0]?.typeBook
    }
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (!id) {
      navigate('/');
      setValues(data);
    } else {
      const myBook = books.filter((bookId) => bookId.isbn !== parseInt(id, 10));
      myBook.push(data);
      setValueRemove(myBook);
      navigate('/');
    }
  };

  const author = register('author');
  const title = register('title');
  const isbn = register('isbn');
  const description = register('description');
  const optShow = register('optShow');
  const typeBook = register('typeBook');
  const typeBookValue = watch('typeBook', book[0]?.typeBook || 'action');

  const handleChange = (event) => {
    setValue(event.target.value);
    optShow.onChange(event);
  };

  const styles = useStyles();

  return (
    <Container>
      <Typography
        component="h2"
        variant="h5"
        align="center"
        sx={{ marginTop: '30px' }}
      >
        Insert a new Book
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={author.ref}
          onChange={author.onChange}
          onBlur={author.onBlur}
          name="author"
          type="text"
          label="Author"
          error={!!errors.author}
          helperText={errors?.author?.message}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          inputRef={title.ref}
          onChange={title.onChange}
          onBlur={title.onBlur}
          name="title"
          type="text"
          label="Title"
          error={!!errors.title}
          helperText={errors?.title?.message}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          inputRef={isbn.ref}
          onChange={isbn.onChange}
          onBlur={isbn.onBlur}
          name="isbn"
          type="text"
          label="ISBN"
          error={!!errors.isbn}
          helperText={errors?.isbn?.message}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          inputRef={description.ref}
          onChange={description.onChange}
          onBlur={description.onBlur}
          name="description"
          type="text"
          label="Description"
          error={!!errors.description}
          helperText={errors?.description?.message}
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <FormControl fullWidth>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose visibility
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="optShow"
            onChange={handleChange}
            value={value}
          >
            <FormControlLabel
              value
              control={<Radio />}
              label="Show book on list"
              {...optShow}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Hide book on list"
              {...optShow}
            />
          </RadioGroup>
          {errors.optShow ? (
            <FormHelperText sx={{ color: 'red' }}>
              {errors?.optShow?.message}
            </FormHelperText>
          ) : null}
        </FormControl>

        <Box sx={{ minWidth: 120, marginTop: '15px ' }}>
          <FormControl fullWidth>
            <InputLabel id="typeBookLabel">Type of book</InputLabel>
            <Select
              labelId="typeBookLabel"
              name="typeBook"
              value={typeBookValue}
              label="Type of Book"
              {...typeBook}
            >
              <MenuItem value="action">Action</MenuItem>
              <MenuItem value="classic">Classic</MenuItem>
              <MenuItem value="comic">Comic Book</MenuItem>
              <MenuItem value="detective">Detective</MenuItem>
              <MenuItem value="fantasy">Fantasy</MenuItem>
              <MenuItem value="horror">Horror</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}
