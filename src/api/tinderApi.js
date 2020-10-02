import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://192.168.0.48:5000/";

// export function getTinderCards() {
//   return fetch(baseUrl + "tinderCards")
//     .then(handleResponse)
//     .catch(handleError);
// }

const TINDER_CARDS = [
  {
    name: "Kotek",
    url: "Karpacz//IMG_20200704_120039.jpg",
  },
  {
    name: "Tobiaszek",
    url: "Karpacz//IMG_20200815_182037.jpg",
  },
  {
    name: "Citoren",
    url: "Karpacz//IMG_20200826_100346.jpg",
  },
];
export function getTinderCards() {
  return new Promise((resolve) => {
    resolve(TINDER_CARDS);
  });
}
