console.log('app.js is running');

const app = {
    title: "Indecision App",
    subtitle: "Put your hands in the life of a computer",
    options: ["one", "two"]
}
 
const template = (
<div>
    <h1>{app.title}</h1>
{/* logical and operator */}
    {app.subtitle && <p>{app.subtitle}</p>}
{/* Terenary operators */}
   <p>{app.options.length > 0 ? "Here are your options" :  "No options"}</p>
    <ol>
        <li>One</li>
        <li>Two</li>
    </ol>
</div>
);

const user ={
    name: 'Brian',
    age: 36,
    location: 'Mexico'
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
<div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age >=18) && <p>age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot);

