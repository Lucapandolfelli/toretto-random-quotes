const API_URL = "http://localhost:5000/api/v1/quotes";

export const getQuote = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      return data[randomNum];
    });
};
