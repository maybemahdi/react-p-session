import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../utility/local";
import Cart from "./Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    fetchData();
  }, []);

  const [cart, setCart] = useState([]);

  // handle add to cart
  const handleAddToCart = (bottle) => {
    // console.log(`added ${bottle.name} to shopping cart`);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  // remove from ls
  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  };

  useEffect(() => {
    if (bottles.length > 0) {
      const savedIntoLS = [];
      const storedCart = getStoredCart();
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedIntoLS.push(bottle);
        }
      }
      setCart(savedIntoLS);
    }
  }, [bottles]);

  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-bold underline">
        Bottles Here!
      </h2>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
