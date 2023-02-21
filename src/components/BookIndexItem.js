import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook } from '../store/books';

const BookIndexItem = ({ book }) => {
  const dispatch = useDispatch()
  const deleteBook = (e) => {
    dispatch(removeBook(book.id))
    e.preventDefault();
  };

  return (
    <li>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
