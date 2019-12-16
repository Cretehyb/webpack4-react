export const INCREMENT = 'INCREMENT'
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
export const INCREMENT_FAILURE = 'INCREMENT_FAILURE'

export const increment = (data: object) => {
  return {
    type: INCREMENT,
    payload: data
  }
}
export const incrementSuccess = (data: object) => {
  return {
    type: INCREMENT_SUCCESS,
    payload: data
  }
}
export const incrementFailure = (error: any) => {
  return {
    type: INCREMENT_FAILURE,
    payload: error
  }
}
