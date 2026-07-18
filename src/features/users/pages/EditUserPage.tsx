// import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useUserDetail } from "../hooks/useUserDetail";
import { useNavigate, useParams } from "react-router-dom";
import { UserFormData } from "../schemas/user.schema";
function EditUserPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const id = Number(userId);

  const { data: user, isLoading } = useUserDetail(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  const handleSubmit = (data: UserFormData) => {
  console.log("Updated User:", data);

  // Later we'll call update API here

  navigate("/users");
};

  return (
    <UserForm
      mode="edit"
      defaultValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      }}
      onSubmit={handleSubmit}
    />
  );
}

export default EditUserPage;