import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10, selectedDate: "2024-01-11" },
    { id: 2, name: "Item 2", price: 20, selectedDate: "2024-01-12" },
    // Add more items as needed
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md bg-white">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">Price: ${item.price}</p>
            <p className="text-gray-500">Selected Date: {item.selectedDate}</p>
            <button
              className="mt-2 bg-orange-600 text-black font-bold px-4 py-2 rounded-md"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold">
          Total Amount: ${calculateTotal()}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
