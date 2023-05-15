import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/reviews'

export function getReview(gigId) {
    return sendRequest(`${BASE_URL}/${gigId}`)
}

export function createReview(newReview){
  return sendRequest(`${BASE_URL}/new`, 'POST', newReview)
}
