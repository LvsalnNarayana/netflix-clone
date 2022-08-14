import React, { useEffect, useState } from "react";
import axios_instance from "../../axios";
import axios from "axios";
import './row.css';

const base_url = `https://image.tmdb.org/t/p/w185`;

function Row(props) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetch_data() {
      const request = await axios_instance.get(`${props.fetch_url}`)
        .then((response) => {
          return response.data.results.map(async (data) => {
            console.log(data.backdrop_path == null);
            if (data.backdrop_path != null) {
              const img_path = await axios.get(`${base_url}${props.is_large_row ? data.poster_path : (data.backdrop_path !== null ? data.backdrop_path : '')}`)
                .then((data) => {
                  return data.config.url
                })
              console.log(img_path);
              return { ...data, poster_path: img_path }
            }
          })
        })
        .then((data) => {
          Promise.all(data).then((data) => {
            setmovies(data)
          })
        })
      return request;
    }
    fetch_data();
  }, [props.fetch_url]);
  return (
    <React.Fragment>
      <div className="Row">
        {/* title of the row */}
        <h2 className="row_title">{props.title}</h2>
        <div className="row_posters">
          {movies.map((movie) => {
            return (
              <img
                className={`row_poster ${props.is_large_row && 'row_poster_large'}`}
                key={movie && movie.id}
                src={movie && movie.poster_path}
                alt={movie && (movie.title || movie.name)}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Row;
