import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import UserForm from "@/components/UserForm/UserForm";
import UserList from "@/components/UserList/UserList";
import { User, userData } from "@/userDataType";

const Home = ({
  userApiData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [userData, setUserData] = useState<User[]>(userApiData);

  const getData = (data: userData) => {
    setUserData([...userData, data]);
  };

  const lastUser = userData?.[userData.length - 1];
  const lastUserId = lastUser?.id;

  return (
    <>
      <UserForm addUserData={getData} lastUserId={lastUserId} />
      <UserList usersList={userData} />
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userApiData: User[] = await response.json();

  return {
    props: {
      userApiData,
    }, // will be passed to the page component as props
  };
}
