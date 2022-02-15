const config = Object.freeze({
  apiURL: 'http://localhost:3000/api/v1',
  queryProvider: {
    staleTime: process.env.REACT_APP_STALE_TIME,
    refetchOnWindowFocus: false,
    retry: process.env.REACT_APP_NUMBER_RETRIES,
  }
})

export default config;