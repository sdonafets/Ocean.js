import AboutMe from "@/components/AboutMe";
import Posts from "@/components/Posts";
import style from "./Home.module.scss";

/*const AllUsersQuery = gql`
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
*/

const Home = () => {
  return (
    <div className={style.content}>
      <AboutMe />
      <Posts className={style.posts} />
    </div>
  );
};
export default Home;
