import React, {useState, useRef} from 'react'
import './App.css';
import MovieSearch from './components/MovieSearch';

function App() {

  const [search, setSearch] = useState('')
  const input = useRef('');

  function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  return (
    <div className="App">
      <h1>Search for a movie</h1>
      <form>
      <input type='text' placeholder='Movie title' name="input" autoComplete = "off" onChange={debounce((e) => setSearch(e.target.value))}></input>
      </form>
      <MovieSearch title={search} />
    </div>
  );
}

export default App;
