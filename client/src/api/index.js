import axios from 'axios'; // we will use this to make api calls

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url) // get all requests