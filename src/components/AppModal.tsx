import React from 'react'
import { BsXLg } from 'react-icons/bs'
import Modal from 'react-modal'

const AppModal = ({ isOpen, onRequestClose, children }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="bg-gray-500 bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 transition"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <div className="flex flex-row justify-between items-center w-96 border-b-2 border-gray-100 pb-4">
        <h1 className="text-xl">Add Client</h1>
        <BsXLg size={20} className="text-gray-400 cursor-pointer hover:scale-125" onClick={onRequestClose} />
      </div>
    </Modal>
  )
}

export default AppModal
