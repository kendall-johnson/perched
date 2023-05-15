import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/gigs'

export function index() {
    return sendRequest(BASE_URL)
}

export function getGig(gigId) {
    return sendRequest(`${BASE_URL}/${gigId}`)
}

export function createGig(formData){
  return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function updateGig(gigId, updatedGig) {
  return sendRequest(`${BASE_URL}/${gigId}`, 'PUT', updatedGig);
}


export function deleteGig(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

