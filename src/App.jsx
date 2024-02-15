/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Pizza from "./components/pizza";
import pizzaData from "../public/data.js";

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Menu</h2>
      {numOfPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
};

const Footer = () => {
  // let time = new Date().toLocaleTimeString();
  let hour = new Date().getHours();
  let openingTime = 4;
  let closingTime = 21;

  let isOpen = hour >= openingTime && hour <= closingTime;

  return (
    <footer className="footer">
      {/* TODO: Check why no footer is being rendered */}
      {isOpen ? (
        <div className="order">
          <p>
            We're open intil {closingTime}:00 PM. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>
            We are happy to serve you from {openingTime}:00 AM to {closingTime}
            :00 PM
          </p>
        </div>
      )}
    </footer>
  );
};
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
