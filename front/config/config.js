export const requestsConfig = {
    // use fake data from './api/mock'
    "USE_MOCK": false,
    // collapsed log group (summary view)
    "COLLAPSED_LOG_REQUESTS": true,
    // set url
    "API_URL": process.env.NODE_ENV === 'development'
        // look for this const in .env file
        ? `${process.env.API_URL_DEV}`
        : window.location.origin + '/api'
}
export const authConfig = {
    "DOMAIN": 'smartz.auth0.com',
    "CLIENT_ID": 'ZMO5C37C8WqaM5jU0egVI5am3hWNhGBv',
    "CALLBACK_URL": window.location.origin + '/callback',
}
