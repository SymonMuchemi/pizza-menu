import "./App.css";
import Pizza from "./components/pizza";
import pizzaData from "../public/data";

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

const Footer = () => {
  let time = new Date().toLocaleTimeString();
  let hour = new Date().getHours();
  let openingTime = 8;
  let closingTime = 21;

  let isOpen = hour >= openingTime && time <= closingTime;

  return (
    <footer className="footer">
      {time} {isOpen ? "We are open!" : "We are closed"}
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
