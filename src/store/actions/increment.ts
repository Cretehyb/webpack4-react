export enum INCREMENT_STATUS {
  INCREMENT = 'INCREMENT',
  INCREMENT_SUCCESS = 'INCREMENT_SUCCESS',
  INCREMENT_FAILURE = 'INCREMENT_FAILURE'
}

export const increment = (data: object) => {
  return {
    type: INCREMENT_STATUS.INCREMENT,
    payload: data
  }
}
export const incrementSuccess = (data: object) => {
  return {
    type: INCREMENT_STATUS.INCREMENT_SUCCESS,
    payload: data
  }
}
export const incrementFailure = (error: any) => {
  return {
    type: INCREMENT_STATUS.INCREMENT_FAILURE,
    payload: error
  }
}
