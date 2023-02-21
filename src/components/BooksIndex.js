import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import { resetBooks } from '../store/books';

const BooksIndex = () => {
  const startingBooksState = useSelector(state => state.books)
  const books = Object.values(startingBooksState);
  const dispatch = useDispatch()
  const resetBookData = (e) => {
    e.preventDefault();
    dispatch(resetBooks())
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem 
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
