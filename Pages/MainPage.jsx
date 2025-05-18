import React from 'react'
import './MainPage.css'
import Details from './Details'

export default function MainPage() {
  return (
    <div className="MainPage">
      

      <div className='DetailsnButton'>
        <div>
          {Details.map((inddetail, index) => (
            <div key={index} className='Details'>
              <img src='/icon-check.svg' />
              <p> {inddetail.detail} </p>
            </div>
          ))}
        </div>
        <button> Start my trial </button>
      </div>
    </div>
  )
}
