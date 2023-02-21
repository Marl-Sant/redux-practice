import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { bookAvailability } from '../store/books';

const BookShow = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch()
  const book = useSelector(state=> state.books[bookId]);

  const changeCheckOut = (e) => {
    e.preventDefault();
    dispatch(bookAvailability(book))
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;
