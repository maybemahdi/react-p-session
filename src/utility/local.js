const getStoredCart = () => {
  const savedLocalString = localStorage.getItem("cart");
  if (savedLocalString) {
    return JSON.parse(savedLocalString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

export { addToLS, getStoredCart, removeFromLS };
