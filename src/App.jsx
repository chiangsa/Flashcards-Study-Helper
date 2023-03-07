import './App.css';
import Card from './components/Card'
import Salt from './images/salt.jpeg';

const App = () => {
    const cards = [
        {question:"Why isn't Hydrogen used to inflate balloons?", answer: "Hydrogen is highly reactive and explosive!", difficulty: "Medium"},
        {question:"What metal is a liquid at room temperature?", answer:"Mercury", difficulty: "Easy"},
        {question:"Why doesn't oil mix with water?", answer:"Oil is hydrophobic, meaning it repels water", difficulty: "Hard"},
        {question:"What is dry ice made of?", answer:"Carbon dioxide", difficulty: "Easy"},
        {question:"A pH of 4 is ___ times more acidic than a pH of 5", answer:"10", difficulty: "Medium"},
        {question:"What element are diamonds made of?", answer:"Carbon", difficulty: "Easy"},
        {question:"This element is essential for strong bones", answer:"Calcium", difficulty: "Easy"},
        {question:"What is the first element of the periodic table?", answer:"Hydrogen", difficulty: "Easy"},
        {question:"What is the formula for water?", answer:"H2O", difficulty: "Easy"},
        {question:"What is the formula for salt?", answer:"NaCl", difficulty: "Easy"},
        {question:"What is the most abundant element on Earth?", answer:"Oxygen", difficulty: "Hard"},
        {question:"In general, metals have a low specific heat, meaning...?", answer:"They heat up quickly", difficulty: "Hard"},
        {question:"What mechanism is reponsible for ice being less dense than water?", answer:"Hydrogen bonding", difficulty: "Hard"},
        {question:"How many atoms are in a mol of something?", answer:"6.022*10^23", difficulty: "Hard"},
        {question:"Saltwater boils at a higher or lower temperature than pure water?", answer:"Higher, as salt is hydrophilic and 'sticks' to water molecules", difficulty: "Hard"}    
    ]
    return (
        <div>
            <div class="topbar">
                <h1 class="title1">Chemistry Flashcards</h1>
                <h2 class="title1">Learn Some Cool Chemistry Related Facts!</h2>
                <h2 class="title1">Number of Cards: 15</h2>
            </div>

            <Card cards={cards} image={Salt}/>
        </div>
    )

}

export default App;