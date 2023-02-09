import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import Spinner from './Spinner'
// const GET_CLIENTS = gql`
// query getClients {
//     clients {
//         id 
//         name
//         email
//         phone
//     }
// }
// `
export default function Clients() {
const {loading, error, data} = useQuery(GET_CLIENTS)
if(loading) return <Spinner/>
if(error) return <p>Something Went Wrong</p>
  return (
    <>{!loading && !error && (
        <table className='table table-hover mt-3'>
            <thead className=''>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client => (
                    <ClientRow key={client.id} client={client}/>
                ))}
            </tbody>
        </table>
    )}</>
  )
}
