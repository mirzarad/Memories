import * as api from '../api';

// Action creators
export default () => async(dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    dispatch({type: "FETCH_ALL", payload: []});
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type: 'CREATE', payload: data});
  } catch(error) {
    console.log(error)
  }
}