import React from 'react';
import './App.css';

function App() {

    // array of 10 colors
    const colorsAvailable = [
        "blue",
        "seagreen",
        "crimson",
        "chartreuse",
        "oldlace",
        "rebeccapurple",
        "cornflowerblue",
        "lightgoldenrodyellow",
        "lightsalmon",
        "mistyrose"
    ];

    // uses Math.random to create a random number
    const randoColor = ((Math.random() * 10) - 1);

    // variable 'chosenColor' stores an instance of variable 'randoColor'
    let chosenColor = colorsAvailable[randoColor];

    // state 'number' used through out entire application
    const [number, changeNumber] = React.useState(1);

    // state 'list' used to aid in functionality and resetting of "Timer" on html.
    const [list, addList] = React.useState([]);

    // state 'color' used to produce the background color of mapped out and built divs.
    const [color, changeColor] = React.useState("blue");

    // used to re-render the page whenever any change has occurred.
    React.useEffect(() => {
        // works with state 'list'. Saves current state to self (newList).
        let newList = list;

        // used to determine when state 'number' is divisible by 2.
        let oddNum = number % 2;

        // if state 'number' is an odd number, this 'if' statement builds a div to html.
        // uses map functionality below to map and build as needed.
        if (oddNum === 1) {
            newList.push("Cool");
            // works with state 'list'. Rewrites state 'list' with current state of variable 'newList'.
            addList(newList);
        }

    }, [number]);

    // styles divs to be mapped out and built.
    let style = {
        height: "100px",
        width: "100px",
        backgroundColor: color,
        border: "3px solid black"
    };

    // maps out and builds divs.
    let boxes = list.map((it, idx) =>
        <div style={style}> </div>
    );

    // function used to determine when state 'number' is divisible by 5.
    // function also is supposed to produce a random color when state 'number' is divisible by 5.
    const colorChangeFunc = () => {
        let numFiveSplit = (number - 1) % 5;

        if (numFiveSplit === 0) {
            changeColor(chosenColor);
        }
    };

    let prepNum = (number - 1);

    return (
        <div className="App">
            <button onClick={() => changeNumber(number + 1)}> Increase</button>
            <button onClick={() => {
                changeNumber(0);
                colorChangeFunc();
                addList([]);
            }}>Reset
            </button>
            <div> Timer: {prepNum}</div>
            {boxes}
        </div>
    );
}

export default App;
