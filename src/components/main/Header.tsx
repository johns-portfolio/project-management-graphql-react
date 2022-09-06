import React from 'react'
import { FaReact } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-white px-10 py-4">
      <div className="flex flex-row items-center gap-2">
        <FaReact size={50} className="text-blue-300" />
        <span>Project Management</span>
      </div>
    </div>
  )
}

export default Header
