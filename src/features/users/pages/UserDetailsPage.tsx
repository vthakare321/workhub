import { useParams } from "react-router-dom";

import {Card} from "../../../components/common/index"
import { useUserDetail } from "../hooks/useUserDetail";

function UserDetailsPage() {
  const { userId } = useParams();

  const id = Number(userId);

  const {
    data: user,
    isLoading,
    isError,
  } = useUserDetail(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !user) {
    return <p>User not found.</p>;
  }

  return (
    <Card title="User Details">
      <div className="space-y-4">

        <div>
          <strong>Name:</strong> {user.fullName}
        </div>

        <div>
          <strong>Email:</strong> {user.email}
        </div>

        <div>
          <strong>Role:</strong> {user.role}
        </div>

        <div>
          <strong>Age:</strong> {user.age}
        </div>

      </div>
    </Card>
  );
}

export default UserDetailsPage;