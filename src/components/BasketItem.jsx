function BasketItem(props) {
   const {
      id,
      name,
      price,
      quantity,
      removeFromBasket = Function.prototype,
      decQuantity = Function.prototype,
      incQuantity = Function.prototype
   } = props;

   
   return (
      <li class="collection-item">
         {name}  <button onClick={() => decQuantity(id)}>-</button>{' '}x {quantity} <button onClick={() => incQuantity(id)}>+</button> = {price*quantity}
         <span class="secondary-content" onClick={() => removeFromBasket(id)}><i class="material-icons basket-delete" >clear</i></span>
      </li>
   )
}
export { BasketItem };