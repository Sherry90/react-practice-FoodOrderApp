import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = item => {};

    const removeItemFromChartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromChartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;