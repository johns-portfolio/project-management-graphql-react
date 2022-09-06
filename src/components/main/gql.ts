import { gql } from '@apollo/client'

export const gqlCmd = {
  getClients: gql`
    query {
      clients {
        _id
        name
        email
        phone
      }
    }
  `,
  deleteClient: gql`
    mutation ($id: String!) {
      deleteClient(id: $id) {
        _id
      }
    }
  `
}

export interface Client {
  _id: string
  name: string
  email: string
  phone: string
}

export interface ClientsResponse {
  clients: Client[]
}

export interface DeleteClientResponse {
  deleteClient: Client
}
