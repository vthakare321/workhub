import { Card } from "../../../components/common";
// import { useAuthStore } from "../../auth/store/authStore";
import {useAuthStore} from "../../auth/store/auth.store"
// import {Card} from "../../../components/common"
function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <div className="text-center py-10">
        No user found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">
        My Profile
      </h1>

      <div>
        <div className="space-y-4">

          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>
            <p className="font-medium">
              {user.firstName} {user.lastName}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Username
            </p>
            <p>{user.username}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>
            <p>{user.role}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfilePage;