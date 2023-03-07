import React from "react";
import { useState } from "react";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  const [text, setText] = useState("Click to Begin");
  const [cardnum, setCardNum] = useState(0);

  function flipCard() {
    setFlipped(!flipped);
    displayText();
  }

  function getText() {
    if (!flipped) {
      return "Question: " + currentCard.question;
    } else {
      return (
        <>
          <p>Answer: {currentCard.answer}</p>
          <img className="images" src={currentCard.image} />
        </>
      );
    }
  }

  function getDifficulty() {
    return currentCard.difficulty;
  }

  function getDifficultyText() {
    if (flipped) {
      return "";
    }
    return currentCard.difficulty;
  }

  function nextCard() {
    const randomNumber = Math.floor(Math.random() * props.cards.length);
    setCardNum(randomNumber);
    setFlipped(false);
    displayText();
  }
  const currentCard = props.cards[cardnum];
  return (
    <div>
      <div className={`Card ${getDifficulty()}`} onClick={flipCard}>
        <h4>{getDifficultyText()}</h4>
        <h5>{getText()}</h5>
      </div>
      <div className="nextbutton">
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default Card;
