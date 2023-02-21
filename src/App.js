import './App.css';
import { GetBooks, GetChapters, GetVerses } from './services/useFetch';


function App() {
 const {verse} = GetVerses();
 const {books} = GetBooks();
 const {chapter} = GetChapters();

  return (
    <div className="App">
      <ul>
        <li>
          {verse.Book}
          {verse.Chapter}:
          {verse.VerseFrom}-
          {verse.VerseTo}
          "{verse.Output}"

        </li>
        <li>
          {chapter.Book}-
          {chapter.Chapter}-
          {chapter.Output}
        </li>
        <li>
          {books.The_New_Testament}
        </li>
      </ul>
    </div>
  );
}

export default App;
