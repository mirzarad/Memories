import axios from 'axios'; // we will use this to make api calls

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url) // get all requests
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id, deletePost) => axios.delete(`${url}/${id}`, deletePost)