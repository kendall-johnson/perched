import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/reviews'

export function getReview(gigId) {
    return sendRequest(`${BASE_URL}/${gigId}`)
}

export function createReview(newReview){
    console.log(newReview)
  return sendRequest(`${BASE_URL}/new`, 'POST', newReview)
}

export function editReview(id, formData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}


export function deleteReview(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
