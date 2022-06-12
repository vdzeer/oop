export const protocolHTTP: string = 'https://'

export const host: string = 'freel-back.herokuapp.com'

export const portAPI: string = '5005'

/**
 * Our back-and API urls
 */

export const default_api = {
  user: `${protocolHTTP}${host}/user-api/`,
  orders: `${protocolHTTP}${host}/order-api/order/`,

  // images: `${protocolHTTP}${host}:${portAPI}/images/`,
  // user: `${protocolHTTP}${host}:${portAPI}/user/api`,
  // current: `${protocolHTTP}${host}:${portAPI}/`,
}
