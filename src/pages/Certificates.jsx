import React from 'react'
import CertificatesCard from '../components/CertificatesCard/CertificatesCard'

const Certificates = () => {
  const CertificatesCards=[
    {
      year:"2021-2024",
      edu:"Bachelor in Information Technology (BAIT) _ISDN",
      university:"Syrian Virtual University"
    },
    {
      year:"2018-2020",
      edu:"Computer Technical Institute/Software Engineering",
      university:"Damascus University"
    },

  ]
  return (
    <div className='Certificates' id='Certificates'>
      <h1 className='header'>My <span>Certificates</span> </h1>
      {CertificatesCards.map((Element , index)=>{return(
        <CertificatesCard key={index} year={Element.year} edu={Element.edu} university={Element.university} /> 
      )})}
    </div>
  )
}

export default Certificates