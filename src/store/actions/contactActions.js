import { contactService } from "../../services/contactService.js"

export function loadContacts() {
  return async (dispatch, getState) => {
    try {
       const { filterBy } = getState().contactModule
      let contacts = await contactService.getContacts(filterBy)
      contacts = contacts.sort((c1,c2)=>c2.lastMsgTime-c1.lastMsgTime)
      dispatch({ type: "SET_CONTACTS", contacts })
    } catch (err) {
      console.log("Cannot load contats", err)
      throw err
    }
  }
}

export function loadContact(contactId) {
  return async (dispatch, getState) => {
    try {
      const contact = await contactService.getById(contactId)
      dispatch({ type: "SET_CONTACT", contact })
      return contact
    } catch (err) {
      console.log("Cannot save contact", err)
      throw err
    }
  }
}

export function sendMsg(msg, contactId) {
  return async (dispatch, getState) => {
    try {
      await contactService.sendMsg(msg, contactId)
      const contact = await contactService.getById(contactId)
      dispatch({ type: "SET_CONTACT", contact })
      dispatch(loadContacts())

      return contact
    } catch (err) {
      console.log("Cannot save contact", err)
      throw err
    }
  }
}
// export function saveContact(contact) {
//     return async (dispatch, getState) => {
//         try {
//             const savedContact = await contactService.saveContact(contact)
//             dispatch({ type: 'UPDATE_CONTACT', contact })

//             return savedContact
//         } catch (err) {
//             console.log('Cannot save contact', err)
//             throw err
//         }
//     }
// }

// export function removeContact(contactId) {
//     return async (dispatch, getState) => {
//         try {
//             const contact = await contactService.deleteContact(contactId)
//             dispatch({ type: 'REMOVE_CONTACT', contactId })
//             return contact
//         } catch (err) {
//             console.log('Cannot remove contact', err)
//             throw err
//         }
//     }
// }

export function setFilterBy(filterBy) {
    console.log('setFilterBy',filterBy);
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}
