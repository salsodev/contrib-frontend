import TypographyH1 from "@/layouts/typography/TypographyH1";
import TypographyP from "@/layouts/typography/TypographyP";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function Error404() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  console.log(error);

  return (
    <section className="flex flex-col h-screen justify-center gap-3">
      <TypographyH1>Ooops! Something went wrong</TypographyH1>
      <TypographyP>{errorMessage}</TypographyP>
      <TypographyP>
        Take me back to{" "}
        <Link to="/" className="text-blue-500 font-bold">
          homepage.
        </Link>
      </TypographyP>
    </section>
  );
}
export default Error404;
