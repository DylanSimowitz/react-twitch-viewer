import { fetchUser } from './AsyncActions'
export function addUser(name) {
  return dispatch => dispatch(fetchUser(name))
}
