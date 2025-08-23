import React from "react";
import Quote from "./quote";

const quotes: {
  text: string;
  author: string;
  direction: "left" | "right";
}[] = [
  {
    text: "“The way to get started is to quit talking and begin doing.”",
    author: "Walt Disney",
    direction: "left",
  },
];

export default function QuotesSection() {
  return (
    <>
      {quotes.map((quote, index) => (
        <Quote
          key={index}
          text={quote.text}
          author={quote.author}
          direction={quote.direction}
        />
      ))}
    </>
  );
}
