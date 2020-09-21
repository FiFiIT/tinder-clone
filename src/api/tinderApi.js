import { handleResponse, handleError } from "./apiUtils";
const url = "???";

const tinderCards = [
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
  return tinderCards;
}
