import { useAuth } from "@/contexts/auth";

function Contribution() {
  const { auth } = useAuth();

  console.log(auth);

  return <div>Contribution</div>;
}
export default Contribution;
