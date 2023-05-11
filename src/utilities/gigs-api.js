import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/gigs'

export function index() {
    return sendRequest(BASE_URL)
}

export function createGig(formData){
    console.log(formData)
  return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function editGig(id, formData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}


export function deleteGig(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

