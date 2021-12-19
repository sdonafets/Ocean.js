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

const Home = ({props}) => {
    const {data, loading, error} = useQuery(AllUsersQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div>
                <p>Returned {data?.users.edges.length || "0"} results</p>
                <ul>
                    {data?.users.edges.map(u => (
                        <li key={u.id}>
                            <div>
                                <p>{u.email}</p>
                                <p>{u.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default Home;