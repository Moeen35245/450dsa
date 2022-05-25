import Profile from "../components/common/Profile";
function ProfilePage() {
  return (
    <>
      <Profile />
    </>
  );
}

export default ProfilePage;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
