const quote = document.querySelector(".container h3");
const authorr = document.querySelector(".container p");
const refreshBtn = document.querySelector(".container button");

const fetchQuote = async () => {
  await fetch("https://quotes-api-self.vercel.app/quote")
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = "'" + data.quote + "'";
      authorr.textContent = data.author;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};

fetchQuote();

refreshBtn.addEventListener("click", fetchQuote);
