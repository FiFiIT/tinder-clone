import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://192.168.0.48:5000/";

export function getTinderCards() {
  return fetch(baseUrl + "tinderCards")
    .then(handleResponse)
    .catch(handleError);
}
