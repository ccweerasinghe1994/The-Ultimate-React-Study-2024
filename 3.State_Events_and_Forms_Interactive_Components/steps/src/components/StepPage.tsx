import { ReactNode } from "react";
import { useParams } from "react-router-dom";

const StepPage = () => {
  const { stepId } = useParams<{ stepId: string }>();
  let step: ReactNode = null;

  if (stepId && !parseInt(stepId)) {
    throw new Error("Invalid Route");
  }

  if (stepId && parseInt(stepId) === 1) {
    step = <h1>Learn React</h1>;
  }

  if (stepId && parseInt(stepId) === 2) {
    step = <h1>Apply For a Job</h1>;
  }

  if (stepId && parseInt(stepId) === 3) {
    step = <h1>Invest Your Income</h1>;
  }
  return (
    <div className={"flex justify-center items-center row-span-8"}>{step}</div>
  );
};

export default StepPage;
