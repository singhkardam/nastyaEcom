import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http://api.something.com' : 'http://localhost:3030';
export const registrationUrl = baseUrl + '/user/signup';
export const loginUrl = baseUrl + '/user/login';
export const getAllUser = baseUrl + '/user/signup';
export const addCategoryUrl = baseUrl + '/product/category/add';
export const getCategoryUrl = baseUrl + '/product/category/get';
export const productsUrl = baseUrl + '/product/add';
export const getProductsUrl = baseUrl + '/product/get';
export const getProductsById = baseUrl + '/product/get/:category_id';
export const getProductDetailsById = baseUrl + '/product/detail';
export const wishListUrl = baseUrl + '/wish-list';
export const getWishListItemByUserId = baseUrl + '/wish-list';
