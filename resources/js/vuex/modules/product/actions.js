import * as actions from './types/actions';
import * as mutations from './types/mutations';
import cartService from './../../../services/cart/cartService';
import wishlistService from './../../../services/wishlist/wishlistService';
import productService from "./../../../services/product/productService";

export default {
  [actions.FETCH_SINGLE_PRODUCT]: async ({ commit }, params) => {
    try {
      const product = await productService.fetchProductApi(params);
      commit(mutations.SET_SINGLE_PRODUCT, product);
      return product;
    } catch (error) {
      console.log(error);
    }
  },
  [actions.FETCH_PRODUCER]: async ({ commit }, params) => {
    try {
      const producer = await productService.fetchProducerApi(params);
      commit(mutations.SET_PRODUCER, producer);
      return producer;
    } catch (error) {
      console.log(error);
    }
  },
  [actions.ADD_TO_CART]: async ({ commit }, product, quantity) => {
    try {
      const cart_product = await cartService.addToCart(product, quantity)
      commit(mutations.SET_TO_CART, cart_product);
      return cart_product;
    } catch (error) {
      console.log(error); 
    } 
  },
  [actions.ADD_TO_WISHLIST]: async ({ commit }, product, quantity) => {
    try {
      const wishlist_product = await wishlistService.addToWishlist(product, quantity)
      commit(mutations.SET_TO_WISHLIST, wishlist_product);
      return wishlist_product;
    } catch (error) {
      console.log(error); 
    } 
  },
}