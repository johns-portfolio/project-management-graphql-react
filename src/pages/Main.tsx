import React from 'react'
import { FaReact } from 'react-icons/fa'
import Clients from '../components/main/Clients'
import Header from '../components/main/Header'

const Main = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <Clients />
    </div>
  )
}

export default Main
