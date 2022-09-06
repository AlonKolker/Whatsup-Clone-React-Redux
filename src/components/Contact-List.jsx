import React from "react"

import { ContactPreview } from "../components/Contact-preview.jsx"

export const ContactsList = ({contacts}) => {
  return (
    <main className='contacts-list-conteiner main-layout'>
  {contacts.map((contact) => (
          <ContactPreview key={contact._id} contact={contact} />
        ))}
    </main>
  )
}
