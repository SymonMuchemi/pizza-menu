import './App.css'
import Pizza from './components/pizza'

const Header = () => {
  return <h2>Fast React Pizza Co.</h2>
}

const Menu = () => {
  return <h3>Menu</h3>
}

const Footer = () => {
  let time = new Date().toLocaleTimeString();

  return <footer>{time}. We're currently open! </footer>
}
function App() {

  return <div>
    <Header/>
    <Menu/>
    <Pizza/>
    <Footer/>
  </div>
}

export default App
