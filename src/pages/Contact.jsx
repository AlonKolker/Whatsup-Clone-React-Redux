import React from "react"

import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadContacts, setFilterBy } from "../store/actions/contactActions"
import { ContactsList } from "../components/Contact-List.jsx"
import { ContactHeader } from "../components/contact-header.jsx"

export const Contacts = () => {
  const contacts = useSelector((state) => state.contactModule.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch])

  const onChangeFilter = useCallback(
    (filterBy) => {
      // console.log(filterBy)
      dispatch(setFilterBy(filterBy))
      dispatch(loadContacts())
    },
    [dispatch]
  )

  return (
    <main className='contacts-conteiner '>
      <ContactHeader />
      <div className="filter-conteiner">
      <input className="filter-contacts" type='text' onChange={(e) => onChangeFilter(e.target.value)} placeholder='Search for contact' />
      </div>
      <ContactsList contacts={contacts} />
    </main>
  )
}
