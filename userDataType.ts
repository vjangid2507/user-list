export type userData = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type User = {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface UserListProps {
  usersList: User[];
}

export interface UserFormProps {
  addUserData: (data: userData) => void;
  lastUserId: number;
}
