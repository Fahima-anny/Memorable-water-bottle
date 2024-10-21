import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { addToCart, getCartFromLS, removeFromLS } from "../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]) ;
const [cart, setCart] = useState([]) ;

    useEffect( () => {
        fetch('bottles.json')
        .then( res => res.json() )
        .then( data => setBottles(data) )
    } , [])


    // load cart from local storage 
    useEffect(()=> {
        console.log('called the useEffect' , bottles.length)
        if(bottles.length > 0){
            const storedCart = getCartFromLS()
            console.log(storedCart,bottles) ; 

const savedCart = [] ;

for(const id of storedCart){
    console.log(id)
const item = bottles.find( bottle => bottle.id === id )
if(item){
savedCart.push(item)
}
}
console.log(cart)
setCart(savedCart)
        }
    } , [bottles])


const handlePurchase = (bottle) => {
// console.log(bottle.name)
setCart([...cart, bottle]) ;
addToCart(bottle.id)
}

const handleRemoveBtn = id => {
    const remaining = cart.filter( bottle => bottle.id !== id )
    setCart(remaining)
    removeFromLS(id)
}

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            {/* <h2>Cart: {cart.length}</h2> */}
           <Cart cart={cart} handleRemoveBtn={handleRemoveBtn}></Cart>
            <div className="bottles">
{
    bottles.map( bottle => <Bottle 
    key={bottle.id}
     bottle={bottle}
     handlePurchase={handlePurchase}
     ></Bottle> )
}
            </div>
        </div>
    );
};

export default Bottles;