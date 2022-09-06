import { FetchResult, useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Client, ClientsResponse, DeleteClientResponse, gqlCmd } from './gql'

const ClientItem = ({ client }: { client: Client }) => {
  const [deleteClient] = useMutation(gqlCmd.deleteClient, {
    variables: {
      id: client._id
    },
    update(cache, { data }: FetchResult<DeleteClientResponse>) {
      console.log('🔥update data', data)
      const { clients } = cache.readQuery<ClientsResponse>({
        query: gqlCmd.getClients
      })!

      cache.writeQuery({
        query: gqlCmd.getClients,
        data: {
          clients: clients.filter((c) => c._id !== data?.deleteClient._id)
        }
      })
    }
  })

  return (
    <tr key={client._id}>
      <td>{client._id}</td>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="bg-red-500 px-2 py-2 rounded-md"
          onClick={async () => {
            await deleteClient({
              variables: {
                id: client._id
              }
            })
          }}
        >
          <FaTrash className="text-white" size={14} />
        </button>
      </td>
    </tr>
  )
}

export default ClientItem
