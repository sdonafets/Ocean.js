import {gql} from '@apollo/client'
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

const Home = () => {
    return (
        <div>
            <AboutMe/>
        </div>
    )
};
export default Home;