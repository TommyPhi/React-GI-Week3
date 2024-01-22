import React, {useEffect, useState} from 'react'

export default function MovieSearch({title}) {

  function Movie(props) {
    return (
      <div id='movieContainer'>
        <img src={'https://image.tmdb.org/t/p/w440_and_h660_face' + props.poster_path}></img>
        <div id="movieDetails">
          <h1>{props.title}</h1>
          <h3>{props.release_date}</h3>
          <p>{props.overview}</p>
          <h2>Genres</h2>
          <ul>
            {props.genres}
          </ul>
        </div>
      </div>
    )
  }

  const [data, setData] = useState({})
  const [genres, setGenres] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGExNDBkYjhhNTEwN2NmYjE0YTNhMmJkMmQ5YjJmYSIsInN1YiI6IjY1NzczNDBhOTQ1MWU3MGZlYjAxZDdhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsgdFm7nHWhcCfZapnJNoGNH06o27o3YO4NZMzdIEMA'
    }
  };

  if(title === "") {
    document.querySelector('body').style.background = 'none'
    document.querySelector('body').style.backgroundColor = 'black'
    return
  } else {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${title}}&include_adult=false&language=en-US&page=1`, options)
    .then(res => res.json())
    .then(json => {
      fetch(`https://api.themoviedb.org/3/movie/${json.results[0].id}?language=en-US`, options)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setGenres(json.genres)
        document.querySelector('body').style.background = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${json.backdrop_path})`
        document.querySelector('body').style.backgroundPosition = 'center'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      })
    })
    .catch(err => console.error('error' + err))
  }

  return (  
    <div>
      {!data ? <p>Loading...</p> : <Movie poster_path={data.poster_path} title={data.title} release_date = {data.release_date} overview = {data.overview} genres = {genres.map(genre => (<li>{genre.name}</li>))}/>}
    </div>
  )
}
