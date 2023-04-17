import React, { useState } from "react";
import { UserListProps } from "@/userDataType";

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
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search....."
      />
      <div>
        <div>USER-ID</div>
        <div>NAME</div>
        <div>EMAIL</div>
        <div>PHONE</div>
      </div>

      <div>
        {allUsersList?.map((user) => (
          <div key={user.id}>
            <div>{user.id} </div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
