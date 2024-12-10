
import { createApiCall } from './createApiCall';

export const createUser = createApiCall('signup', 'api/signup', 'POST', false); 
export const addToCart = createApiCall('addCart', 'api/add_to_cart', 'POST', true); 
export const dashboard = createApiCall('dashboard', 'api/dashboard', 'POST', true); 
export const removeFromCart = createApiCall('removeFromCart', 'api/remove_cart/:id', 'POST', true); 
// export const createUser = createApiCall('users/createUser', '/signup', 'POST', false); // No token required
// export const updateUser = createApiCall('users/updateUser', '/user/update', 'PUT', true); // Requires token
