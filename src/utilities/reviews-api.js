import sendRequest from "./send-request";
const BASE_URL = '/api/reviews'

export function getReview(gigId) {
    return sendRequest(`${BASE_URL}/${gigId}`)
}

export function createReview(newReview){
  return sendRequest(`${BASE_URL}/new`, 'POST', newReview)
}
