import { userData } from "@/userDataType";
import React, { useState } from "react";

interface UserFormProps {
  addUserData: (data: userData) => void;
  lastUserId: number;
}

const UserForm: React.FC<UserFormProps> = ({ addUserData, lastUserId }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone } = userDetails;
    if (name && email && phone) {
      const userData = {
        id: lastUserId + 1,
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
      };
      addUserData(userData);
    }
    setUserDetails({ ...userDetails, name: "", email: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          value={userDetails.name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          value={userDetails.email}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
          value={userDetails.phone}
          required
        />
        <button type="submit">Add User</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
