import React from 'react'
import ContactInformation from './contact-info'
import EmergencyContact from './emergency-contact'

const ContactInfoCard = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <ContactInformation />
      <EmergencyContact />
    </div>
  )
}

export default ContactInfoCard