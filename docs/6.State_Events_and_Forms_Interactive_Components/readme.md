# 6.State_Events_and_Forms_Interactive_Components

- [6.State\_Events\_and\_Forms\_Interactive\_Components](#6state_events_and_forms_interactive_components)
  - [1. Section Overview](#1-section-overview)
  - [2. Let's Build a Steps Component](#2-lets-build-a-steps-component)
  - [3. Handling Events the React Way](#3-handling-events-the-react-way)
  - [4. What is State in React](#4-what-is-state-in-react)
    - [1. **What is State and Why Do We Need It?**](#1-what-is-state-and-why-do-we-need-it)
      - [Why is State Important?](#why-is-state-important)
      - [Example:](#example)
    - [2. **How to Use State in Practice**](#2-how-to-use-state-in-practice)
      - [a) **useState** (for local component state)](#a-usestate-for-local-component-state)
      - [b) **useReducer** (for more complex state logic)](#b-usereducer-for-more-complex-state-logic)
      - [c) **Context API** (for sharing state across components)](#c-context-api-for-sharing-state-across-components)
    - [3. **Thinking About State**](#3-thinking-about-state)
      - [a) **When to use state**:](#a-when-to-use-state)
      - [b) **Where to place state**:](#b-where-to-place-state)
      - [Example:](#example-1)
      - [c) **Types of state**:](#c-types-of-state)
    - [Conclusion](#conclusion)
  - [5. Creating a State Variable With useState](#5-creating-a-state-variable-with-usestate)
  - [6. Don't Set State Manually!](#6-dont-set-state-manually)
  - [7. The Mechanics of State](#7-the-mechanics-of-state)
  - [8. Adding Another Piece of State](#8-adding-another-piece-of-state)
  - [9. React Developer Tools](#9-react-developer-tools)
  - [10. Updating State Based on Current State](#10-updating-state-based-on-current-state)
  - [11. More Thoughts About State + State Guidelines](#11-more-thoughts-about-state--state-guidelines)
  - [12. A Vanilla JavaScript Implementation](#12-a-vanilla-javascript-implementation)
  - [13. CHALLENGE #1 Date Counter (v1)](#13-challenge-1-date-counter-v1)
  - [14. Starting a New Project The Far Away Travel List](#14-starting-a-new-project-the-far-away-travel-list)
  - [15. Building the Layout](#15-building-the-layout)
  - [16. Rendering the Items List](#16-rendering-the-items-list)
  - [17. Building a Form and Handling Submissions](#17-building-a-form-and-handling-submissions)
  - [18. Controlled Elements](#18-controlled-elements)
  - [19. State vs. Props](#19-state-vs-props)
  - [20. EXERCISE #1 Flashcards](#20-exercise-1-flashcards)
  - [21. CHALLENGE #2 Date Counter (v2)](#21-challenge-2-date-counter-v2)


## 1. Section Overview

add these styles to the `index.css` file
```css
/* 
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 */

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #333;
}

.steps {
  width: 600px;
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 25px 100px;
  margin: 100px auto;
}

.numbers {
  display: flex;
  justify-content: space-between;
}

.numbers > div {
  height: 40px;
  aspect-ratio: 1;
  background-color: #e7e7e7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.numbers .active {
  background-color: #7950f2;
  color: #fff;
}

.message {
  text-align: center;
  font-size: 20px;
  margin: 40px 0;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.buttons button {
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 10px;
}

.buttons button span {
  font-size: 16px;
  line-height: 1;
}

h3 {
  margin: 0;
  text-transform: uppercase;
}

.close {
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 40px;
  color: inherit;
}

.close:hover {
  color: #7950f2;
}
```

copy these `vanila.html` file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../src/style.css" />
    <title>Vanilla JS steps</title>
  </head>
  <body>
    <div class="steps">
      <div class="numbers">
        <div class="step-1">1</div>
        <div class="step-2">2</div>
        <div class="step-3">3</div>
      </div>

      <p class="message"></p>

      <div class="buttons">
        <button class="previous">Previous</button>
        <button class="next">Next</button>
      </div>
    </div>

    <script>
      const messages = [
        'Learn React ⚛️',
        'Apply for jobs 💼',
        'Invest your new income 🤑',
      ];

      // Selecting DOM elements
      const step1 = document.querySelector('.step-1');
      const step2 = document.querySelector('.step-2');
      const step3 = document.querySelector('.step-3');
      const message = document.querySelector('.message');
      const btnPrevious = document.querySelector('.previous');
      const btnNext = document.querySelector('.next');

      // "State"
      let step = 1;

      // Manually updating the DOM: changing text content and adding/removing classes (imperative approach)
      const updateUIValues = function () {
        message.textContent = `Step ${step}: ${messages[step - 1]}`;

        if (step >= 1) step1.classList.add('active');
        else step1.classList.remove('active');

        if (step >= 2) step2.classList.add('active');
        else step2.classList.remove('active');

        if (step >= 3) step3.classList.add('active');
        else step3.classList.remove('active');
      };

      // Initial setup
      updateUIValues();

      // Manually attaching event listeners
      btnPrevious.addEventListener('click', function () {
        if (step > 1) step -= 1;
        updateUIValues();
      });

      btnNext.addEventListener('click', function () {
        if (step < 3) step += 1;
        updateUIValues();
      });
    </script>
  </body>
</html>

```
## 2. Let's Build a Steps Component
```tsx
const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {

    const step = 3;

    const handleNext = () => {
    };
    const handlePrevious = () => {
    };

    return (
        <div className={'steps'}>
            <div className="numbers">
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <div className="message">
                step {step}:{messages[step]}
            </div>
            <div className="buttons">
                <button onClick={handlePrevious} style={{
                    backgroundColor: "#7950f2",
                    color: "#fff",
                }}>Previous
                </button>
                <button onClick={handleNext} style={{
                    backgroundColor: "#7950f2",
                    color: "#fff",
                }}>Next
                </button>
            </div>
        </div>
    )
}

export default App

```

## 3. Handling Events the React Way
In TypeScript with React, handling events is similar to how it's done in JavaScript. However, you need to specify the type of event you're handling. Here's an example of how to handle a click event in TypeScript with React:


In this example, the `handleClick` function is typed with `MouseEvent<HTMLButtonElement>`, which represents a mouse click event on a button element. When the button is clicked, the `handleClick` function is called, and "Button clicked!" is logged to the console.
## 4. What is State in React
![img_1.png](img_1.png)
The image you’ve provided introduces the concept of **state** in React and how it’s fundamental for React developers to master. The image highlights three major topics related to React state:

1. **What is state and why do we need it?**
2. **How to use state in practice?**
3. **Thinking about state**

Let’s break these down one by one with in-depth explanations and examples to help you fully understand these key aspects of React state.

### 1. **What is State and Why Do We Need It?**

**State** in React refers to the data that can change over time and is specific to a component. React components can maintain their own state, and when this state changes, the component re-renders to reflect the updated data.

#### Why is State Important?
State is crucial because it allows React components to be dynamic and interactive. Without state, a React component would be static, unable to update based on user interaction or data changes.

#### Example:

Consider a simple counter component. The state will hold the current count, and every time a user clicks the "Increment" button, the count will update, and the UI will re-render to reflect the new value.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

- **useState(0)** initializes the count to 0.
- **setCount** updates the count state.
- Every time the button is clicked, the count state changes, triggering a re-render of the component.

Without state, the component would be unable to keep track of the count or update dynamically when the button is pressed.

### 2. **How to Use State in Practice**

In practice, there are different ways to manage state depending on the complexity of the app. Here are some of the key tools and techniques:

#### a) **useState** (for local component state)
`useState` is used for managing local state in functional components.

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [name, setName] = useState("John");
```

This holds the current name as a state and updates it whenever needed.

#### b) **useReducer** (for more complex state logic)

`useReducer` is an alternative to `useState` for managing more complex state logic, such as multiple state values or actions.

Example:

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

In this example:
- We use `useReducer` to handle actions like increment and decrement.
- It is especially useful when state changes are complex or involve multiple steps.

#### c) **Context API** (for sharing state across components)

The **Context API** is used when you need to share state between multiple components without having to pass props down manually at every level (also called "prop drilling"). It provides a way to create global state that can be accessed by any component in the tree.

Example:

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Themed Button</button>;
}
```

Here:
- `ThemeContext` is a context that holds the current theme (either light or dark).
- `useContext` is used inside `ThemedButton` to access the theme value from the context.

This helps avoid passing props through every component in the tree.

### 3. **Thinking About State**

When building applications, thinking about how you manage state is critical. React developers need to consider:

#### a) **When to use state**:
Use state when:
- You need dynamic values that change based on user input, API responses, or time.
- The component’s output depends on this changing value.

#### b) **Where to place state**:
State should be placed at the **closest common ancestor** of all components that need to use or update the state. This concept is called "lifting state up."

For example, if two sibling components both need to access the same piece of state, it should be lifted to the parent of both siblings, so that it can be passed down as props.

#### Example:
If `ComponentA` and `ComponentB` both need access to `count`, you would lift the `count` state to their parent and pass it down:

```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ComponentA count={count} />
      <ComponentB count={count} setCount={setCount} />
    </div>
  );
}
```

#### c) **Types of state**:
React developers often deal with different types of state:
- **Local State**: Managed within a single component.
- **Global State**: Shared across multiple components (often managed by Context API or Redux).
- **Server State**: Data fetched from external APIs (can be handled with libraries like `react-query`).
- **URL State**: State stored in the URL (e.g., query parameters).

---

### Conclusion

State is central to building interactive and dynamic React applications. Understanding how and where to manage state helps developers write more efficient, scalable, and maintainable code. Key tools like `useState`, `useReducer`, and the Context API, along with thoughtful state management practices, enable developers to solve complex UI challenges.

This image emphasizes that state is the most important concept in React, as it underpins the dynamic nature of the library. The first section introduces state, while subsequent sections dive deeper into how to practically use and think about state in React applications.
![img_2.png](img_2.png)
![img_3.png](img_3.png)
![img_4.png](img_4.png)
![img_5.png](img_5.png)
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
