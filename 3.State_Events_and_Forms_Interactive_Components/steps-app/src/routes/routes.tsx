import App from "@/App";
import ErrorPage from "@/components/errors/RouteError";
import StepPage from "@/components/StepPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/step/:stepId",
        element: <StepPage />,
      },
    ],
  },
]);

export default router;
