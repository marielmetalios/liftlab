import { useState, useEffect } from "react";
import { getRandomQuote } from "quote-lib";

interface Quote {
  id: number;
  text: string;
  author: string;
  category: string[];
}

const QuoteContainer = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchedQuote = getRandomQuote();
    setQuote(fetchedQuote);
  }, []);

  return (
    <div className="quote-box mt-4 p-4 border rounded text-center">
      <h3>Quote of the Day:</h3>
      {quote ? (
        <>
          <p className="fs-5">"{quote.text}"</p>
          <p className="fs-6">- {quote.author}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuoteContainer;
