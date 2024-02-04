import PropTypes from 'prop-types';


function Pizza({pizzaObj}) {

    return <div className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
    </div>
}
// Define propTypes
Pizza.propTypes = {
    pizzaObj: PropTypes.shape({
      ingredients: PropTypes.array.isRequired,
    }).isRequired,
  };
export default Pizza
