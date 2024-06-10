import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
      <Headers />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
      <img src="pizzas/margherita.jpg" alt="Pizza Marghe"></img>
    </div>
  );
  
}
function Menu() {}
function Headers() {
  return (
    <div>
      <h1>Pizzaria Cafe Varanasi</h1>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h5>We're now Open</h5>
    </div>
  );
}

export default App;
