import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h3 className="text-xl text-center my-5 font-bold">
        Cart: {cart.length}
      </h3>
      <div className="flex justify-center items-center flex-wrap mx-auto gap-1 mb-2">
        {cart.map((bottle) => (
          <div
            key={bottle.id}
            className="flex flex-col justify-center items-center gap-1"
          >
            <img
              className="w-[50px] rounded-full"
              key={bottle.id}
              src={bottle.img}
            ></img>
            <button onClick={()=> handleRemoveCart(bottle.id)} className="p-2 rounded-xl bg-gray-200">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Cart;
