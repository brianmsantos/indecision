const template  = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
)

ReactDOM.render(template, appRoot,)

//app.js
console.log('app.js is running');
const app = {
    title: "Indecision App",
    subtitle: "Put your hands in the life of a computer",
    options: []
};
const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById("app");

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert (option);
};

const render = () => {
    const template  = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick= {onMakeDecision}>What Should I Do?</button>

            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                app.options.map((option) => {
                    return <li key ={option}>Option: {option}</li>;
                })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template, appRoot);
};

render();

<h2>{props.subtitle}</h2>

// import "./utils.js";

// import subtract, { square, add} from "./utils.js"

// console.log("app.js is running");
// console.log(square(5));
// console.log(add(40, 2));
// console.log(subtract(100, 81));

import isSenior, { isAdult, canDrink } from "./person.js"

console.log(isAdult(18));
console.log(canDrink(22));
console.log(isSenior(64));

//Setting up the default export and function, grab the default and call it. 