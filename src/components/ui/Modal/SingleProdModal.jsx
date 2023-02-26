import React from 'react'

const SingleProdModal = ({image, name, author}) => {
  return (
    <div>
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>

        <div>
<h1>{name}</h1>
<p>written by {author}</p>
        </div>

        
    </div>
  )
}

export default SingleProdModal