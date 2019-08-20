export const INCREMENT = 'INCREMENT'
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
export const INCREMENT_FAILURE = 'INCREMENT_FAILURE'

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const incrementSuccess = (data) => {
   return {
     type: INCREMENT_SUCCESS,
     payload: data
   }
}
export const incrementFailure = (error) => {
  return {
    type: INCREMENT_FAILURE,
    payload: error
  }
}