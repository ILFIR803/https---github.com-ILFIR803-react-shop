import { BasketItem } from './BasketItem';

function BasketList(props) {
   const {
      order = [],
      handleBasketShow = Function.prototype,
      removeFromBasket = Function.prototype,
      decQuantity = Function.prototype,
      incQuantity = Function.prototype
   } = props;

   const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity
   }, 0);

   return (
      <ul class="collection">
         <li class="collection-item active">Корзина</li>
         {
            order.length ? order.map(item => (
               <BasketItem
                  key={item.id}
                  removeFromBasket={removeFromBasket}
                  decQuantity={decQuantity}
                  incQuantity={incQuantity}
                  {...item} />
            )) : (
               <li class="collection-item">
                  Корзина пуста
               </li>
            )
         }

         <li class="collection-item active colletion-buy-wrapper">
            <span>Общая стоимость: {totalPrice} руб.</span>
            <button className='colletion-buy'>Оформить заказ</button>
            </li>
         <i class="material-icons collection-close"
            onClick={handleBasketShow}>
            clear
         </i>
      </ul>
   )

};

export { BasketList };