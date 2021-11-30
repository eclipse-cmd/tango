import axios from "axios"
import { fetchToken } from "../utils/helper"

export const
    token = fetchToken(),
    get = (endpoint, headers = {}) => {
        return new Promise((resolve, reject) => {
            axios
                .get(endpoint, {
                    headers: {
                        "Authorizer": token,
                        "Content-Type": "application/json",
                        ...headers
                    }
                })
                .then((response) => {
                    resolve(response.data)
                    console.log("GET REQUEST RESPONSE: ", response)
                })
                .catch((error) => {
                    localStorage.clear()
                    reject(error);
                });
        })
    },

    post = (endpoint, bodyData, headers = {}) => {
        return new Promise((resolve, reject) => {
            axios.post(endpoint, bodyData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorizer": "" + token,
                    ...headers
                }
            })
                .then(response => {
                    resolve(response.data)
                    // console.log("POST REQUEST RESPONSE: ", response)
                })
                .catch(error => {
                    localStorage.clear()
                    reject(error)
                })
        })
    }