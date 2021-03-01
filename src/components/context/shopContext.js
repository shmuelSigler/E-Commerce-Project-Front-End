import React from 'react'

export default React.createContext({
    myCart: [],         //array of objects
    numOfItems: 0,  //number of products in the cart
    arrayOfOccurrences:[],
    arrayOfUniqueObjects: [],
    initialPrice: 0,
    shipmentPrice: 0,
    shipmentMethod:"Self-Pickup- $0.00",
    totalPrice: 0,
    addToCart: (product,num=1) => {},
    removeFromCart: product => {},
    eraseProductFromCart: product => {},
    computeTotalPrice: option => {},
    emptyCart: () => {},
    
})