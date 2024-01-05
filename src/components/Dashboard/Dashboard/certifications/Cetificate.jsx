import React from 'react'

const Cetificate = ({img, title, date_completed}) => {
  return (
    <div>
        <div>
            <img src={img}  />
        </div>
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {date_completed}
            </p>
        </div>
    </div>
  )
}

export default Cetificate