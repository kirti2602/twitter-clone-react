import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmer flex flex-col gap2rem'>
        <div className='shimmer__avatar'></div>
        <div className="shimmer__body flex flex-col">
            <div className="shimmer__body__items"></div>
            <div className="shimmer__body__items"></div>
            <div className="shimmer__body__items"></div>
            <div className="shimmer__body__items"></div>
            <div className="shimmer__body__items"></div>
        </div>
    </div>
  )
}

export default Shimmer