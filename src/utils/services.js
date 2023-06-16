import axios from 'axios'
import { CREATCONTRACTFORM, ITEMS, LIST, LOGIN, ROW, VENDORITEMS, VENDORLISTING } from './routes'


export const BASE_URL = 'http://localhost:3001' //devlopment//
// export const BASE_URL = 'http://localhost:3001' //production//

axios.defaults.baseURL = BASE_URL

export const loginService = async (data) => {
  try {
    const response = await axios.post(LOGIN, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const vendorList = async (data) => {
    try {
      const response = await axios.get(LIST, {
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.status === 200) {
        return { res: response.data }
      } else return response.data
    } catch (err) {
      if (err.response) throw err.response.data
      else throw err.message
    }
}


export const vendorView = async (id) => {
  try {
    const response = await axios.get(`${ROW}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const itemDropDown = async (id) => {
  try {
    const response = await axios.get(ITEMS, {
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}


export const vendorDropDown = async (id) => {
  try {
    const response = await axios.get(VENDORLISTING, {
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}


export const ContractForm = async (id) => {
  try {
    const response = await axios.post(CREATCONTRACTFORM, {
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

