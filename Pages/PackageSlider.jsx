import React, { useEffect, useState } from 'react'
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import './PackageSlider.css'
import Packages from './Packages.jsx'

export default function PackageSlider() {
  const [sliderValue, setSliderValue] = useState(30)
  const [displayValue, setDisplayValue] = useState(0)
  const [month, setmonth] = useState(true)
  const yearlyprice = Packages[displayValue].price * 0.75

  useEffect(() => {
    if (sliderValue <= 20) {
      setDisplayValue(0) // 10K
    }
    if (sliderValue > 20 && sliderValue <= 40) {
      setDisplayValue(1) // 50K
    }
    if (sliderValue > 40 && sliderValue <= 60) {
      setDisplayValue(2) // 100K
    }
    if (sliderValue > 60 && sliderValue <= 80) {
      setDisplayValue(3) // 500K
    }
    if (sliderValue > 80) {
      setDisplayValue(4) // 1M
    }

  }, [sliderValue])

  return (
    <div className='PackageSlider'>
      <div className='TotalDetails'>
        <p> {Packages[displayValue].title} pageviews </p>
        <div className='PriceDetails'>
          {month? 
          <h3> ${Packages[displayValue].price}.00 </h3> :
          <h3> ${yearlyprice}.00 </h3>}
          <p> / month </p>
        </div>
      </div>

      <input 
        type='range'
        min='0'
        max='100'
        step='1'
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className='slider'
      />

      <div className='ChangePeriod'>
        <p className='Month'> Monthly Billing </p>
        {month? 
          <BiSolidToggleLeft size={45} className='toggle' onClick={() => setmonth(!month)} />
          :
          <BiSolidToggleRight size={45} className='toggle' onClick={() => setmonth(!month)} />
        } 
        <p className='Year'> Yearly Billing </p>
        <p className='Discount'> 25% discount </p>

      </div>
    </div>
  )
}
