import { useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import UserForm from "@/components/UserForm/UserForm";
import UserList from "@/components/UserList/UserList";
import { User, userData } from "@/userDataType";
import styles from "../styles/Home.module.css";

const Home = ({
  userApiData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [userData, setUserData] = useState<User[]>(userApiData);

  const getData = (data: userData) => {
    setUserData([...userData, data]);
  };

  const lastUser = userData?.[userData.length - 1];
  const lastUserId = lastUser?.id;

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div className={styles.main}>
        <UserForm addUserData={getData} lastUserId={lastUserId} />
        <UserList usersList={userData} />
      </div>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userApiData: User[] = await response.json();

    return {
      props: {
        userApiData,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
