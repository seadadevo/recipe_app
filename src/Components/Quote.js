import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "flowbite-react";

export default function Quote() {
  // Static data for quotes
  const quotes = [
    {
      text: "Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.",
      author: "Anthony Bourdain",
    },
    {
      text: "Food is symbolic of love when words are inadequate.",
      author: "Alan D. Wolfelt",
    },
    {
      text: "You do not have to cook fancy or complicated masterpieces, just good food from fresh ingredients.",
      author: "Julia Child",
    },
    {
      text: "Food is the most primitive form of comfort.",
      author: "Sheilah Graham",
    },
    {
      text: "The only time to eat diet food is while you are waiting for the steak to cook.",
      author: "Julia Child",
    },
    {
      text: "There is no sincerer love than the love of food.",
      author: "George Bernard Shaw",
    },
    {
      text: "Good food is the foundation of genuine happiness.",
      author: "Auguste Escoffier",
    },
    {
      text: "We should look for someone to eat and drink with before looking for something to eat and drink.",
      author: "Epicurus",
    },
    {
      text: "Food is everything we are. It’s an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma.",
      author: "Anthony Bourdain",
    },
  ];

  return (
    <div className="relative w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {quotes.map((quote, index) => (
          <div key={index} className="quotee">
            <p className="quote-text">
              <FontAwesomeIcon icon={faQuoteLeft} />
              "{quote.text}"
            </p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
