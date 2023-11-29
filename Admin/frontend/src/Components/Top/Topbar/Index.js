import React from 'react'
import Logo from './Logo'
import ShopCart from '../../Modals/ShopCart'
import LocationModal from '../../Modals/LocationModal'
import Usermodal from '../../Modals/Usermodal'

const Index = () => {
  return (
    <div>
      <Logo />
      <ShopCart />
      <LocationModal />
      <Usermodal />
    </div>
  )
}

export default Index
