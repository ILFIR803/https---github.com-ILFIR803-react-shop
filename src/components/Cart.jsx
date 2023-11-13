import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
   const { order, handleBasketShow = Function.prototype} = useContext(ShopContext);
   
   const quantity = order.length;

   return (
      <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
         <i className="material-icons">local_grocery_store</i>
         {quantity ?
            <span> {quantity}</span>
            :
            null
         }
      </div>
   );
}

export { Cart };