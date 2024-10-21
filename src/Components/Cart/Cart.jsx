import './Cart.css';

const Cart = ({cart,handleRemoveBtn}) => {
    return (
        <div>
            <h3>cart: {cart.length}</h3>
            <div className='cart-container'>
{
    cart.map( item =>
    <div>
         <img src={item.img} alt="" />
         <button onClick={() => handleRemoveBtn(item.id)}>Remove</button>
    </div> )
}
            </div>
        </div>
    );
};

export default Cart;