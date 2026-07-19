import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";
import { UserFormData } from "../schemas/user.schema";
import { useCreateUser } from "../hooks/useCreateUser";
import { UserModel } from "../model/user.model";

function CreateUserPage() {
  const navigate = useNavigate();

  const createUser = useCreateUser();

  const handleSubmit = async (
    data: UserFormData
  ) => {
     console.log("Submitted:", data);
    const newUser: UserModel = {
      id: 0,
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      username: data.email,
      age: 0,
      gender: "",
      image: "",
      role: data.role,
    };

    await createUser.mutateAsync(newUser);

    navigate("/users");
  };

  return (
    <UserForm
      mode="create"
      onSubmit={handleSubmit}
    />
  );
}

export default CreateUserPage;