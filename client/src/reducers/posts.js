/* a reducer is a function that accepts the state and the action 
and based on the action type i.e create, we can do more action such as some logic or return an action or change the state. Common practice is to use a switch statement.

const reducer = (state, action) => {
  if(action.type === 'CREATE'){
    return action || []
  }
    if(action.type === 'REMOVE'){
    return action || []
  }
    if(action.type === 'UPDATE'){
    return action || []
  }
    if(action.type === 'DELETE'){
    return action || []
  }
}

Our state here is posts

*/

export default (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return posts
    default:
      return posts
  }
}