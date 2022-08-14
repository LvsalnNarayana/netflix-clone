import axios from "axios";

// import socketIOClient from "socket.io-client";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // headers: {
    //     "Access-Control-Allow-Origin": "*",

    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    // }
});

// const img_instance = axios.create({
//     baseURL: 'https://image.tmdb.org/t/p/original/'
// });
// // const socket = socketIOClient('https://api.themoviedb.org/3');
// export {img_instance};
export default instance;