import React, { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const addItems = (product, quantity) => {
    if (existsItemsInCart(product.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.id === product.id) {
          element.quantity = element.quantity + quantity;
          element.subtotal = subtotalByProduct(product.price, element.quantity);
        }
      }
      setCart(newCart);
    } else {
      product.quantity = quantity;
      product.subtotal = subtotalByProduct(product.price, product.quantity);
      setCart([...cart, product]);
    }
  };

  const updateQuantity = (id, bol) => {
    if (existsItemsInCart(id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.id === id) {
          if (bol) {
            element.quantity += 1;
            element.subtotal = subtotalByProduct(element.price, element.quantity);
          } else {
            element.quantity -= 1;
            element.subtotal = subtotalByProduct(element.price, element.quantity);
          }
        }
      }
      setCart(newCart);
    }
  };

  const deleteProduct = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const existsItemsInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const subtotalByProduct = (price, cant) => {
    return price * cant;
  };

  const subtotalAmount = () => {
    return cart.reduce((suma, item) => suma + item.subtotal, 0);
  };

  const totalAmount = () => {
    const delivery = 14;
    return subtotalAmount() + delivery;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItems,
        subtotalByProduct,
        subtotalAmount,
        totalAmount,
        updateQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
