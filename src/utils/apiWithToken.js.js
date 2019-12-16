import axios from "axios";

export const apiWithToken = token =>
  axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://tourz-django.herokuapp.com`,
    headers: {
      Authorization: `Token ${token}`
    }
  });
