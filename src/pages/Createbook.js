import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
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
    .required('ISBN is a required field')
    .positive()
    .integer(),
  description: yup.string(),
  active: yup.bool().required('You need to select if the book will be visible')
});

export default function Createbook() {
  const { setValues } = useContext(BookContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/');
    setValues(data);
  };

  const author = register('author');
  const title = register('title');
  const isbn = register('isbn');
  const description = register('isbn');
  const active = register('active');

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
        {/* !! -> cast a value to boolean */}
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
        <Button>Next</Button>
      </Form>
    </Container>
  );
}

// autor, titulo, isbn, descrição, genero, ativo
