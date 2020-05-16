import React, { useContext } from "react"
import axios from "axios"
import { StoreContext } from "../context/store"

const getToken = localStorage.getItem("token")
const token = JSON.parse(getToken)
axios.defaults.headers.common["Authorization"] = token.token
const apiEndPoint = "https://candidate.neversitup.com/todo"
axios.defaults.baseURL = apiEndPoint

export const getAll = () => {
  return axios.get(`/todos`)
}

export const create = (data) => {
  return axios.post(`/todos`, data)
}

export const update = (id, data) => {
  return axios.put(`/todos/${id}`, data)
}

export const remove = (id, data) => {
  return axios.delete(`/todos/${id}`, data)
}
