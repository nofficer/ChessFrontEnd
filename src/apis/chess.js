import axios from 'axios'

export default axios.create({
  baseURL: 'https://chess-back-end.herokuapp.com'
})
