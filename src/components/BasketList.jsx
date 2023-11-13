import { BasketItem } from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketList() {

   const { order = [], handleBasketShow = Function.prototype, } = useContext(ShopContext);

   const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity
   }, 0);

   return (
      <ul className="collection">
         <li className="collection-item active">Корзина</li>
         {
            order.length ? order.map(item => (
               <BasketItem
                  key={item.id}
                  {...item} />
            )) : (
               <li className="collection-item">
                  Корзина пуста
               </li>
            )
         }

         <li className="collection-item active colletion-buy-wrapper">
            <span>Общая стоимость: {totalPrice} руб.</span>
            <button className='colletion-buy'>Оформить заказ</button>
         </li>
         <i className="material-icons collection-close"
            onClick={handleBasketShow}>
            clear
         </i>
      </ul>
   )

};

export { BasketList };