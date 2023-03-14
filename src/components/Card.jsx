import React from "react";
import { useState } from "react";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  const [cardnum, setCardNum] = useState(0);
  const currentCard = props.cards[cardnum];
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [borderColor, setBorderColor] = useState("black");
  const [guessed, setGuessed] = useState(false);

  function flipCard() {
    if (guessed) {
      setFlipped(!flipped);
    }
    else {
      alert("Guess at least once")
    }
  }

  function getText() {
    if (!flipped) {
      return ("Question: " + currentCard.question);
    } 
    else {
      return (
        <div>
          <p>Answer: {currentCard.answer}</p>
          <img className="images" src={currentCard.image} />
        </div>
      );
    }
  }
  
  function getSubmit() {
    const handleSubmit = (e) => {
      e.preventDefault();
      checkAnswer();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Answer here..."
          style={{ borderColor: borderColor}}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  function checkAnswer() {
    setGuessed(true);
    if (userAnswer === "") {
      setBorderColor("black");
    }
    if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
      setIsCorrect(true);
      setCurrentStreak(currentStreak + 1);
      if (currentStreak >= maxStreak) {
        setMaxStreak(currentStreak + 1);
      }
      setBorderColor("green");
    } else {
      alert("Streak reset, incorrect answer")
      setIsCorrect(false);
      setCurrentStreak(0);
      setBorderColor("red");
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


  function previousCard() {
    const randomNumber = (cardnum + props.cards.length - 1) %  props.cards.length;
    setCardNum(randomNumber);
    setFlipped(false);
    setUserAnswer("");
    setGuessed(false);
    if (!guessed) {
      alert("Streak reset, didn't answer")
      setCurrentStreak(0);
    }
    
  }

  function nextCard() {
    const randomNumber = (cardnum + 1) %  props.cards.length;
    setCardNum(randomNumber);
    setFlipped(false);
    setUserAnswer("");
    setGuessed(false);
    if (!guessed) {
      alert("Streak reset, didn't answer")
      setCurrentStreak(0);
    }
  }

  function shuffleCards() {
    setGuessed(false);
    const shuffledCards = props.cards.sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    setCardNum(randomIndex);
    setFlipped(false);
    props.setCards(shuffledCards);
    if (!guessed) {
      alert("Streak reset, didn't answer")
      setCurrentStreak(0);
    }
  }
  
  function getCurrentStreak() {
    return currentStreak;
  }

  function getMaxStreak() {
    return maxStreak;
  }

  function getColor() {
    return borderColor;
  }
  
  return (
    <div>
      <div className="counter">
        Current Streak: {getCurrentStreak()}
      </div>
      <div className="counter">
        Max Streak: {getMaxStreak()}
      </div>
      <div className={`Card ${getDifficulty()}`} onClick={flipCard}>
        <h4>{getDifficultyText()}</h4>
        <h5>{getText()}</h5>
      </div>
      <div className={`submit ${getColor()}`}>
          {getSubmit()}
      </div>
      <div className="nextbutton">
        <button onClick={previousCard}>Previous</button>
        <button onClick={shuffleCards}>Shuffle</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default Card;
