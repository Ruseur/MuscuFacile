import Constants from '@/config.js'

import axios from 'axios'

export const getAllExercices = () => {
  const url = `${Constants.API_LOCALHOST}/exercices`

  return axios.get(url)
}

export const getExercice = id => {
  const url = `${Constants.API_LOCALHOST}/exercices/${id}`

  return axios.get(url)
}
