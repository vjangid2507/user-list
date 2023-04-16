import React, { useState } from "react";
import { userData } from "@/userDataType";

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
        <label>Name</label>
        <input
          type="text"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          value={userDetails.name}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          value={userDetails.email}
          required
        />
        <label>Phone</label>
        <input
          type="text"
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
