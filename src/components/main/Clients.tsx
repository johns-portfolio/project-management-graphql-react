import React, { useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { ClientsResponse, gqlCmd } from './gql'
import ClientItem from './ClientItem'
import { FaUser } from 'react-icons/fa'
import Modal from 'react-modal'
import AppModal from '../AppModal'

const Clients = () => {
  const { loading, error, data } = useQuery<ClientsResponse>(gqlCmd.getClients)
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <>
      <div className="bg-white py-10 px-10">
        <h1 className="text-xl">Clients</h1>
        <button
          className="btn-primary mt-10"
          onClick={() => setShowCreateModal(true)}
        >
          <FaUser size={16} />
          <span>Add Client</span>
        </button>
        {loading && <span>Loading...</span>}
        {error && <span>{error.message}</span>}
        {data && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.clients.map((c) => (
                    <ClientItem client={c} key={c._id} />
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AppModal
        isOpen={showCreateModal}
        onRequestClose={() => setShowCreateModal(false)}
      >
        <div className="flex">xxxxx</div>
      </AppModal>
    </>
  )
}

export default Clients
