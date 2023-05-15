import sendRequest from "./send-request";
const BASE_URL = '/api/skills'

export function index() {
    return sendRequest(BASE_URL)
}

export function getSkill(userId) {
  return sendRequest(`${BASE_URL}/${userId}`)
}

export function createSkill(skillData){
  return sendRequest(`${BASE_URL}/new`, 'POST', skillData)
}
