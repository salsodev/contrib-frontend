import { useAuth } from "@/contexts/auth";

function Overview() {
  const { auth } = useAuth();
  return <div>Overview</div>;
}
export default Overview;
