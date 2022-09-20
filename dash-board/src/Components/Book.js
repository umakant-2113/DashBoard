import data from '../data.js';
const Book = () => {
  return (
    <>
      <ul className='list-people'>
        {data.books.map((book) => {
          return (
            <li key={book.isbn}>
              <img className='book-img' src={book.image} alt='' />
              <h2>{book.title} </h2>
              <p>{book.author}</p>
              <p>{book.description} </p>
              <a href={book.website}> Read More</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Book;
