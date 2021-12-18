import Head from 'next/head'
import {gql, useQuery} from '@apollo/client'

const AllUsersQuery = gql`
    query allUsersQuery($first: Int, $after: String) {
        users(first: $first, after: $after){
            pageInfo {
                endCursor,
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    email
                    role
                    image
                }
            }
        }
    }
`;

export default function Home() {
    const {data, loading, error} = useQuery(AllUsersQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div className="container mx-auto max-w-5xl my-20">
                <p className="text-lg font-medium">Returned {data?.users.edges.length || "0"} results</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data?.users.edges.map(u => (
                        <li key={u.id} className="shadow  max-w-md  rounded">
                            <div className="p-5 flex flex-col space-y-2">
                                <p className="text-sm text-blue-500">{u.email}</p>
                                <p className="text-lg font-medium">{u.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}