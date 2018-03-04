export const API_URL = /localhost/.test(window.location.origin)
                     ? 'http://localhost:3000/prod'
                     : window.location.origin + '/prod';
