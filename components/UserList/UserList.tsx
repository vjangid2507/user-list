import React, { useState } from "react";
import styled from "styled-components";
import { UserListProps } from "@/userDataType";

const UserListHeading = styled.div`
  display: flex;
  background-color: gray;
`;
const DataItem = styled.div`
  width: 25%;
`;

const DataListRow = styled.div`
  display: flex;
  background-color: #e2dfdf;
`;

const SearchInput = styled.input`
  width: 50%;
  margin: 10px 0;
  height: auto;
  padding: 5px 8px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const headingItems = ["UserID", "Name", "Email", "Phone"];

const UserList: React.FC<UserListProps> = ({ usersList }) => {
  const [searchText, setSearchText] = useState("");

  const allUsersList = searchText
    ? usersList.filter(
        (user) =>
          user?.name?.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
          user?.email?.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    : usersList;

  return (
    <>
      <SearchInput
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search....."
      />
      <UserListHeading>
        {headingItems.map((item) => (
          <DataItem key={item}>{item}</DataItem>
        ))}
      </UserListHeading>

      {allUsersList?.map((user) => (
        <DataListRow key={user.id}>
          <DataItem>{user.id}</DataItem>
          <DataItem>{user.name}</DataItem>
          <DataItem>{user.email}</DataItem>
          <DataItem>{user.phone}</DataItem>
        </DataListRow>
      ))}
    </>
  );
};

export default UserList;
