import { removeFromLS } from '../Utilities/localStorage';
import './Bottle.css'

const Bottle = ({bottle,handlePurchase}) => {
    const {name, img, price} = bottle ;
    // console.log(handlePurchase)
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>price: ${price}</p>
            <button onClick={ () => handlePurchase(bottle)}>Purchase</button>
            {/* <button onClick={ () => ha(bottle.id)}>Remove</button> */}
        </div>
    );
};

export default Bottle;