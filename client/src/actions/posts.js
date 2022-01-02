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