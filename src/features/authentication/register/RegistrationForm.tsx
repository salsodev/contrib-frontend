import FormFieldInput from "@/components/custom/FormInputField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { UserSignupSchema, UserSignupSchemaType } from "@/models/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

function RegistrationForm() {
  const { mutate } = useRegister();

  const form = useForm<UserSignupSchemaType>({
    resolver: zodResolver(UserSignupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (payload: UserSignupSchemaType) => {
    mutate(payload);
  };

  return (
    <Card className="mx-auto max-w-md mt-20 border-gray-700 dark:text-gray-400 text-gray-600">
      <CardHeader>
        <CardTitle className="text-2xl text-black dark:text-white">
          Register
        </CardTitle>
        <CardDescription className="">
          Enter your details below and take the first step to an exhilarating
          contributions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5">
              <FormFieldInput
                control={form.control}
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
                inputClassName="border-gray-700"
                required={true}
              />
              <FormFieldInput
                control={form.control}
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
                inputClassName="border-gray-700"
                required={true}
              />
            </div>

            <FormFieldInput
              control={form.control}
              label="Username"
              name="username"
              type="text"
              placeholder="JohDoe"
              inputClassName="border-gray-700"
              required={true}
            />

            <FormFieldInput
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="JohnDoe@gmail.com"
              inputClassName="border-gray-700"
              required={true}
            />

            <FormFieldInput
              control={form.control}
              label="Password"
              name="password"
              type="password"
              placeholder="**********"
              inputClassName="border-gray-700"
              required={true}
            />

            <Button type="submit" className="w-full bg-sky-700 text-white">
              Create an account
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-sm gap-2">
        Already have an account?
        <Link to="/login" className="underline">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}
export default RegistrationForm;
