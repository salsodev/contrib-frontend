import { toast } from "@/hooks/use-toast";
import { loginUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

function useLogin() {
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn: loginUser,
    onError: (error: any) => {
      toast({
        title: error.response.data.status,
        description: error.response.data.message,
      });
    },
  });

  return { mutate, data, isPending, isSuccess };
}
export default useLogin;
