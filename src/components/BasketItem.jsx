import { useContext } from 'react'
import { ShopContext } from '../context'


function BasketItem(props) {
   const {
      id,
      name,
      price,
      quantity,
   } = props;

   const { removeFromBasket, decQuantity, incQuantity } = useContext(ShopContext);

   return (
      <li className="collection-item">
         {name}  <button
            onClick={() => decQuantity(id)}>-
         </button>
         {' '}x {quantity}
         <button
            onClick={() => incQuantity(id)}>+
         </button> =
         {price * quantity}
         <span
            className="secondary-content"
            onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete" >
               clear
            </i>
         </span>
      </li>
   )
}
export { BasketItem };