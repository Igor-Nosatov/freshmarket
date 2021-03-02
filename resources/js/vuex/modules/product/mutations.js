import * as mutations from './types/mutations';

export default {
  [mutations.SET_SINGLE_PRODUCT]: (state, product) => {
    state.product = product;
  },
  [mutations.SET_PRODUCER]: (state, producer) => {
    state.producer = producer;
  },
  [mutations.SET_TO_CART]: (state, cart_product) => {
    state.cart_product = cart_product;
  },
  [mutations.SET_TO_WISHLIST]: (state, wishlist_product) => {
    state.wishlist_product = wishlist_product;
  },
}




