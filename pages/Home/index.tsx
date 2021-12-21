import {gql, useQuery} from '@apollo/client'
import AboutMe from "@/components/AboutMe";

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
            <AboutMe/>
        </div>
    )
};
export default Home;