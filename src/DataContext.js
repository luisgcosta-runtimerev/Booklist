import React, { createContext, useMemo, useState } from 'react';

export const BookContext = createContext();

export default function DataContext({ children, ...props }) {
  const [books, setBooks] = useState({});
  const setValues = (values) => {
    setBooks((prevData) => ({
      ...prevData,
      ...values
    }));
  };
  const booksProvider = useMemo(
    () => ({ books, setValues }),
    [books, setValues]
  );
  return (
    <BookContext.Provider value={booksProvider} {...props}>
      {children}
    </BookContext.Provider>
  );
}
