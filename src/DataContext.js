import React, { createContext, useState} from 'react'

export const BookContext = createContext()

export default function DataContext({children, ...props}) {
const [books, setBooks] = useState({})

const setValues = (values) => {
    setBooks( prevData => ({
        ...prevData,
        ...values
    }))
}
  return (
    <BookContext.Provider value={{books,setValues}} {...props}>
        {
            children
        }
    </BookContext.Provider>
  )
}

