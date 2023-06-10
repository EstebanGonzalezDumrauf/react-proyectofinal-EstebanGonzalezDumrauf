import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            let posicion = cart.findIndex(producto => producto.id === item.id);
            cart[posicion].cantidad += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:quantity}]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const totalItems = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const totalMonto = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, totalItems, totalMonto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;