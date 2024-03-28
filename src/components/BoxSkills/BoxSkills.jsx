import './Skillstyle.css'

import React from 'react'

const BoxSkills = ({img , title}) => {
  return (
    <div className='skillBox'>
    <div className='skillTitle'>
        <div className="img">
            {img}
        </div>
        <h3>{title} </h3>
    </div>
</div>
  )
}

export default BoxSkills