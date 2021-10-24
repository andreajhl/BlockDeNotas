export const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map(e=> {
        return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(base64)
};