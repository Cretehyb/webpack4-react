import request from './request.js';

export const increment = (params = {}) => {
    request.get('/', params)
}
 
