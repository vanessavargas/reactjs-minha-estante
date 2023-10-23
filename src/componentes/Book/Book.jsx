import "./Book.style.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Book = ({ book, corDeFundo, aoDeletar }) => {
  return (
    <div className="book">
      <AiFillCloseCircle size={25} className="book__delete" onClick={() => aoDeletar(book)}/>
      <div className="book__header" style={{ backgroundColor: corDeFundo }}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book__footer">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
    </div> 
  );
};

export default Book;
