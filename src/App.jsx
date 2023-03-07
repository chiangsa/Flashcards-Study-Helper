import "./App.css";
import Card from "./components/Card";
import Explode from "./images/hexplode.jpeg";
import Mercury from "./images/mercury.jpeg";
import Hydrophobic from "./images/hydrophobic.jpeg";
import DryIce from "./images/dryice.jpeg";
import Diamond from "./images/diamond.webp";
import Calcium from "./images/calcium.webp";
import Hydrogen from "./images/hydrogen.png";
import Water from "./images/water.jpeg";
import Salt from "./images/salt.jpeg";
import Oxygen from "./images/oxygen.png";
import Metal from "./images/metal.webp";
import Hbond from "./images/hbond.png";
import Avocado from "./images/avocado.jpeg";
import Saltwater from "./images/saltwater.jpeg";
import PH from "./images/ph.jpeg";

const App = () => {
  const cards = [
    {
      question: "Why isn't Hydrogen used to inflate balloons?",
      answer: "Hydrogen is highly reactive and explosive!",
      difficulty: "Medium",
      image: Explode,
    },
    {
      question: "What metal is a liquid at room temperature?",
      answer: "Mercury",
      difficulty: "Easy",
      image: Mercury,
    },
    {
      question: "Why doesn't oil mix with water?",
      answer: "Oil is hydrophobic, meaning it repels water",
      difficulty: "Hard",
      image: { Hydrophobic },
    },
    {
      question: "What is dry ice made of?",
      answer: "Carbon dioxide",
      difficulty: "Easy",
      image: { DryIce },
    },
    {
      question: "A pH of 4 is ___ times more acidic than a pH of 5",
      answer: "10",
      difficulty: "Medium",
      image: { PH },
    },
    {
      question: "What element are diamonds made of?",
      answer: "Carbon",
      difficulty: "Easy",
      image: { Diamond },
    },
    {
      question: "This element is essential for strong bones",
      answer: "Calcium",
      difficulty: "Easy",
      image: { Calcium },
    },
    {
      question: "What is the first element of the periodic table?",
      answer: "Hydrogen",
      difficulty: "Easy",
      image: { Hydrogen },
    },
    {
      question: "What is the formula for water?",
      answer: "H2O",
      difficulty: "Easy",
      image: { Water },
    },
    {
      question: "What is the formula for salt?",
      answer: "NaCl",
      difficulty: "Easy",
      image: { Salt },
    },
    {
      question: "What is the most abundant element on Earth?",
      answer: "Oxygen",
      difficulty: "Hard",
      image: { Oxygen },
    },
    {
      question: "In general, metals have a low specific heat, meaning...?",
      answer: "They heat up quickly",
      difficulty: "Hard",
      image: { Metal },
    },
    {
      question:
        "What mechanism is reponsible for ice being less dense than water?",
      answer: "Hydrogen bonding",
      difficulty: "Hard",
      image: { Hbond },
    },
    {
      question: "How many atoms are in a mol of something?",
      answer: "6.022*10^23",
      difficulty: "Hard",
      image: { Avocado },
    },
    {
      question:
        "Saltwater boils at a higher or lower temperature than pure water?",
      answer: "Higher, as salt is hydrophilic and 'sticks' to water molecules",
      difficulty: "Hard",
      image: { Saltwater },
    },
  ];
  return (
    <div>
      <div class="topbar">
        <h1 class="title1">Chemistry Flashcards</h1>
        <h2 class="title1">Learn Some Cool Chemistry Related Facts!</h2>
        <h2 class="title1">Number of Cards: 15</h2>
      </div>

      <Card cards={cards} />
    </div>
  );
};

export default App;
