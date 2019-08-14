 import React from 'react'

 const MyLoadingComponent = ({ isLoading = true, error }) => {
    if (isLoading) {
      return <div>Loading...</div>
    } else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>
    } else {
      return null
    }
  }

  export default MyLoadingComponent