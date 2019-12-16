import React, { SFC } from 'react'

interface Props {
  isLoading: boolean
}
const MyLoadingComponent: SFC<Props> = ({ isLoading = true }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  } else if (isLoading === false) {
    return (
      <div>Sorry, there was a problem loading the page!</div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default MyLoadingComponent