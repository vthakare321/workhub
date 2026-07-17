// import { useAuthStore } from "../features/auth/store/auth.store";
import { useAuthStore } from "../../features/auth/store/auth.store";

function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-xl font-semibold">
        WorkHub Operations Portal
      </h2>

      <div className="font-medium">
        Welcome, {user?.firstName}
      </div>
    </header>
  );
}

export default Header;