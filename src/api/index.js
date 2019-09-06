import request from './request.js';

export const Increment = (params = {}) => {
    const url = '/'
    request.get(url, params)
}
 
