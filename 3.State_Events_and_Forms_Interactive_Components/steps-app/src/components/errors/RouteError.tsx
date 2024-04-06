import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { ReactNode } from "react";
import { Button } from "../ui/button";

const ErrorPage = () => {
  const errorObject = useRouteError();
  let Errormessage: ReactNode;
  if (isRouteErrorResponse(errorObject)) {
    console.error(errorObject);
    if (errorObject.status === 404) {
      const { statusText, data } = errorObject;
      if (data) {
        Errormessage = <i>{statusText || data}</i>;
      } else {
        Errormessage = <i>{"some thing went wrong"}</i>;
      }
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center mt-20" id="error-page">
      <h1>Oops!</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Sorry, an unexpected error has occurred.
      </p>
      <p>{Errormessage}</p>
      <Link to={"/"}>
        <Button>Go Back To Home Page</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
