import React, { useState, useEffect } from 'react';
import axios_instance from "../../axios";
import axios from "axios";
import requests from "../../request";
import './banner.css'

const base_url = `https://image.tmdb.org/t/p/original/`;

function Banner() {
    const [movie, setmovie] = useState({});
    useEffect(() => {
        async function fetch_data() {
            const request = await axios_instance.get(requests.fetchActionMovies)
                .then((response) => {
                    return response.data.results.map(async (data) => {
                        if (data.backdrop_path != null) {
                            const img_path = await axios({
                                url: `${base_url}${data.backdrop_path}`,
                                method: 'GET',
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    'Content-Type': 'application/json',
                                }
                            })
                                .then((data) => {
                                    return data.config.url
                                })
                            return { ...data, backdrop_path: img_path }
                        }else{
                            console.log('logged');
                        }
                    })
                })
                .then((data) => {
                    Promise.all(data).then((data) => {
                        setmovie(data[Math.floor(Math.random() * (data.length - 1))])
                    })
                })
            return request;
        }
        fetch_data();
    }, []);
    console.log(movie);
    function truncate(str, n) {
        return (str !== undefined ? str.length > n : null) ? str.substr(0, n - 1) + '&hellip;' : str;
    };
    return (
        <React.Fragment>
            <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${movie.backdrop_path})`,
            backgroundPosition: 'center center',
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie.title || movie.name || movie.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie ? movie.overview : '', 200)}</h1>
            </div>
            <div className='banner_fade_bottom'></div>
        </header>
        </React.Fragment>
    )
}

export default Banner