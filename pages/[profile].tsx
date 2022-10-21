import UserProfile from "../components/UserProfile";

function Profile() {
  return <UserProfile />;
}

export async function getStaticPaths() {
  const users = await fetch("http://localhost:3002/getUsers");
  const result = await users.json();
  const paths = [...result].map(path => {
    return { params: { profile: path.username } }
  });

  return {
    paths: [...paths], fallback: false
  }
}

export async function getStaticProps() {
  return { props: {} }
}

export default Profile;
