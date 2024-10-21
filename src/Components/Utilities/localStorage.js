// get cart from local storage 
const getCartFromLS = () => {
    const storedCart = localStorage.getItem('cart') ;
    if(storedCart){
        return JSON.parse(storedCart) ;
    }
    return [] ;
}


// add item to cart 
const addToCart = item => {
    const cart = getCartFromLS() ;
    cart.push(item) ;
saveToLS(cart)
}


// save new cart to local storage 
const saveToLS = (cart) => {
localStorage.setItem('cart',JSON.stringify(cart))
}


// remove item from local storage 
const removeFromLS = id => {
const storedCart = getCartFromLS() ;
const updatedCart = storedCart.filter( idx => idx !== id ) 
saveToLS(updatedCart)
}


export {addToCart, getCartFromLS, removeFromLS} ;