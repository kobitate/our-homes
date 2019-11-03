import axios from 'axios'
// import jwt from 'jsonwebtoken'

// const token = jwt.sign({}, process.env.REACT_APP_API_JWT_SECRET)
const options = {
  // headers: {
  //   token
  // }
}

const getHomes = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/homes?chrisbypassauth`, options)
}

const getHome = mlsID => {
  return axios.get(`${process.env.REACT_APP_API_URL}/homes/${mlsID}?chrisbypassauth`, options)
}

const getCities = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/cities`, options)
}

export { getHomes, getHome, getCities }
