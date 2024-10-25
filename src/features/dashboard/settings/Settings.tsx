import { useAuth } from "@/contexts/auth";

function Settings() {
  const { auth } = useAuth();
  return <div>Settings</div>;
}
export default Settings;
