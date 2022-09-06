import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { httpService } from './http.service'
import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'


const USER_KEY = 'user_db'
const LOGGED_IN_USER = 'user'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getUsers,
  getById,
  remove,
  saveLocalUser,
  update,
}

// _createUsers()

async function getUsers() {
  // try {
  //   const users = await storageService.query(USER_KEY)
  //   return users
  // } catch (err) {
  //   console.log('Cannot get users', err)
  // }
  return httpService.get(`user`)
}
async function getById(userId) {
  // try {
  //   const user = await storageService.get(USER_KEY, userId)
  //   return user
  // } catch (err) {
  //   console.log('Cannot find user', err)
  // }

  const user = await httpService.get(`user/${userId}`)
  return user
  //socketService.emit(USER_KEY, userId)
  //socketService.off(USER_KEY, onUserUpdate)
  //socketService.on(USER_KEY, onUserUpdate)
}
async function remove(userId) {
  // try {
  //   const user = await storageService.remove(USER_KEY, userId)
  //   return user
  // } catch (err) {
  //   console.log('Cannot remove user', err)
  // }
  return httpService.delete(`user/${userId}`)
}

async function update(user) {
  // try {
  //   await storageService.put(USER_KEY, user)
  //   if (getLoggedInUser()._id === user._id) saveLocalUser(user)
  //   return user
  // } catch (err) {
  //   console.log('Cannot update user', err)
  // }
  user = await httpService.put(`user/${user._id}`, user)
}

// async function login(userCred) {
//   try {
//     const users = await storageService.query(USER_KEY)
//     const user = users.find(user => user.username === userCred.username)
//     _saveLocalUser(user)
//   } catch (err) {
//     console.log('Cannot login', err)
//   }

//   //const user = await httpService.post('auth/login', userCred)
//   // socketService.emit('set-user-socket', user._id)
//   //if (user) {
//   //socketService.login(user._id)
//   //}
// }

async function login(userCred) {
  // try {
  //   const users = await storageService.query(USER_KEY)
  //   console.log('users', users)
  //   const user = users.find(user => user.username === userCred.username)
  //   return saveLocalUser(user)
  // } catch (err) {
  //   throw err
  // }

  const user = await httpService.post('auth/login', userCred)
  socketService.emit('set-user-socket', user._id)
  saveLocalUser(user)
  return user
}

async function signup(userCred) {
  // const user = await storageService.post(USER_KEY, userCred)
  const user = await httpService.post('auth/signup', userCred)
  // socketService.emit('set-user-socket', user._id)
  saveLocalUser(user)
  return user
}
async function logout() {
  sessionStorage.removeItem(LOGGED_IN_USER)
  // socketService.emit('unset-user-socket')
  return await httpService.post('auth/logout')
}

// async function logout() {
//   console.log('service log out')
//   try {
//     await storageService.logout(LOGGED_IN_USER)
//   } catch (err) {
//     console.log('Cannot logout', err);
//   }
//   //socketService.logout()
//   //return await httpService.post('auth/logout')
// }
// async function signup(userCred) {
//   try {
//     const user = await storageService.post(USER_KEY, userCred)
//     return user
//   } catch (err) {
//     console.log('Cannot signup', err)
//   }
//const user = await httpService.post('auth/signup', userCred)
//socketService.login(user._id)
// }

function getLoggedinUser() {
  return {
    name:'Admin',
    image:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',

  }
  // return JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || 'null')
}

/* function onUserUpdate(user) {
  showSuccessMsg(
    `This user ${user.fullname} just got updated from socket, new score: ${user.score}`
  )
  store.commit({ type: 'setWatchedUser', user })
}
 */

// function _createUsers() {
//   utilService.saveToStorage(USER_KEY, gUser)
// }

function saveLocalUser(user) {
  sessionStorage.setItem(LOGGED_IN_USER, JSON.stringify(user))
  return user
}
