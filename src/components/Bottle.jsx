import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price } = bottle;
  const handleCart = () => {
    handleAddToCart(bottle);
  };
  return (
    <div className="rounded-xl border-black border r w-full space-y-[10px]">
      <img className="h-[70%] rounded-t-xl w-full" src={img} alt="" />
      <div className="px-5">
        <h3 className="pt-5">Name: {name}</h3>
        <p>Price: ${price}</p>
        <button
          onClick={handleCart}
          className="py-2 px-3 bg-gray-500 rounded-lg my-3 transition-all duration-300 hover:bg-gray-600 text-white font-bold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
