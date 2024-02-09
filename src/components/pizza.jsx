import PropTypes from "prop-types";

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
// Define propTypes
Pizza.propTypes = {
  pizzaObj: PropTypes.shape({
    ingredients: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired, // Add the missing prop validation
    price: PropTypes.string.isRequired
  }).isRequired,
};
export default Pizza;
