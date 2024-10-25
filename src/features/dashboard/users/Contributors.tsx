import { useAuth } from "@/contexts/auth";

function Contributors() {
  const { auth } = useAuth();

  return <div>Contributors</div>;
}
export default Contributors;
