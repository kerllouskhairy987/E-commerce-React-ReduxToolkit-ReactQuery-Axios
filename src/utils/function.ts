import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (cartItems: IProduct[], product: IProduct) => {
    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
        return cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...product, quantity: 1 }];
};


export const addItemToLocalStorage = (product: IProduct) => {
    const existingProducts: IProduct[] = JSON.parse(localStorage.getItem("productsList") || "[]");

    const exists = existingProducts.some(item => item.id === product.id);

    if (!exists) {
        existingProducts.push(product);
        localStorage.setItem("productsList", JSON.stringify(existingProducts));
    }
};
