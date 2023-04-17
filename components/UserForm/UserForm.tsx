import React, { useState } from "react";
import styled from "styled-components";
import { UserFormProps } from "@/userDataType";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
  margin: 10px 0;
`;

const Input = styled.input`
  height: auto;
  width: auto;
  padding: 5px 8px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled("button")<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor};
  height: auto;
  width: 30%;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
`;

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
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          value={userDetails.name}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          value={userDetails.email}
          required
        />
        <Input
          type="text"
          placeholder="Phone"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
          value={userDetails.phone}
          required
        />
        <Button type="submit" bgColor="red">
          Add User
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
