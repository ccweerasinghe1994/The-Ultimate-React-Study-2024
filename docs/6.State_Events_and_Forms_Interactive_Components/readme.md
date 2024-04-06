# 6.State_Events_and_Forms_Interactive_Components

## 1. Section Overview

## 2. Let's Build a Steps Component
```tsx
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
  return <div className={"h-[50vh] mx-auto text-center"}>{step}</div>;
};

export default StepPage;

```

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useParams, useNavigate } from "react-router-dom";

const PaginationPage = () => {
  const { stepId } = useParams();
  const navigate = useNavigate();
  const currentPage: number = (stepId && parseInt(stepId)) || 1;
  const pageCount = 3;

  const handlePrevious = (currentPage: number) => {
    if (currentPage <= 1) {
      return;
    }
    navigate(`/step/${currentPage - 1}`);
  };

  const handleNext = (currentPage: number) => {
    if (currentPage < pageCount) {
      navigate(`/step/${currentPage + 1}`);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrevious(currentPage)} />
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 1 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/1`}>
            <PaginationLink>1</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 2 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/2`}>
            <PaginationLink>2</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 3 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/3`}>
            <PaginationLink>3</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem onClick={() => handleNext(currentPage)}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;

```
![img.png](img.png)
## 3. Handling Events the React Way
In TypeScript with React, handling events is similar to how it's done in JavaScript. However, you need to specify the type of event you're handling. Here's an example of how to handle a click event in TypeScript with React:

```tsx
import React, { MouseEvent } from 'react';

const MyButton: React.FC = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyButton;
```

In this example, the `handleClick` function is typed with `MouseEvent<HTMLButtonElement>`, which represents a mouse click event on a button element. When the button is clicked, the `handleClick` function is called, and "Button clicked!" is logged to the console.
## 4. What is State in React
## 5. Creating a State Variable With useState
## 6. Don't Set State Manually!
## 7. The Mechanics of State
## 8. Adding Another Piece of State
## 9. React Developer Tools
## 10. Updating State Based on Current State
## 11. More Thoughts About State + State Guidelines
## 12. A Vanilla JavaScript Implementation
## 13. CHALLENGE #1 Date Counter (v1)
## 14. Starting a New Project The Far Away Travel List
## 15. Building the Layout
## 16. Rendering the Items List
## 17. Building a Form and Handling Submissions
## 18. Controlled Elements
## 19. State vs. Props
## 20. EXERCISE #1 Flashcards
## 21. CHALLENGE #2 Date Counter (v2)
