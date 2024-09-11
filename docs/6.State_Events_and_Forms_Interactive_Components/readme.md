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
    - [1. **What is State?**](#1-what-is-state)
      - [Key Concepts:](#key-concepts)
      - [Example:](#example-2)
    - [2. **Props vs. State**](#2-props-vs-state)
    - [Example to Illustrate Props and State:](#example-to-illustrate-props-and-state)
      - [Parent Component (with props):](#parent-component-with-props)
      - [Child Component (with state):](#child-component-with-state)
    - [3. **Lifting State Up**](#3-lifting-state-up)
      - [Example:](#example-3)
    - [4. **Why is State Important?**](#4-why-is-state-important)
    - [Conclusion:](#conclusion-1)
    - [What is State?](#what-is-state)
    - [Examples from the Image:](#examples-from-the-image)
    - [Why is State Important in React?](#why-is-state-important-in-react)
    - [Conclusion:](#conclusion-2)
    - [What is State?](#what-is-state-1)
    - [Component State](#component-state)
    - [Props vs. State](#props-vs-state)
    - [State and UI Relationship](#state-and-ui-relationship)
    - [Component Re-Rendering](#component-re-rendering)
    - [Conclusion:](#conclusion-3)
    - [What is State in React?](#what-is-state-in-react)
    - [State Allows Developers To:](#state-allows-developers-to)
    - [Final Takeaway:](#final-takeaway)
  - [5. Creating a State Variable With useState](#5-creating-a-state-variable-with-usestate)
    - [1. Importing React Dependencies](#1-importing-react-dependencies)
    - [2. Defining an Array of Messages](#2-defining-an-array-of-messages)
    - [3. Defining the Main `App` Component](#3-defining-the-main-app-component)
    - [4. Using `useState` to Manage the Current Step](#4-using-usestate-to-manage-the-current-step)
      - [Example:](#example-4)
    - [5. Handling the "Next" Button Click](#5-handling-the-next-button-click)
      - [Example:](#example-5)
    - [6. Handling the "Previous" Button Click](#6-handling-the-previous-button-click)
      - [Example:](#example-6)
    - [7. Rendering the UI](#7-rendering-the-ui)
      - [a. Step Numbers](#a-step-numbers)
      - [b. Message Display](#b-message-display)
      - [c. Buttons](#c-buttons)
    - [Full Example of Behavior](#full-example-of-behavior)
    - [Key Points:](#key-points)
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
The image you’ve shared explains the concept of **state** in React. It describes state as the data that a component holds over time, essentially the "component’s memory." The state in React is essential because it allows components to remember and track changes across user interactions or application events.

Let's break this down further:

### 1. **What is State?**
In React, **state** is an object or value that determines how that component renders and behaves. When the state of a component changes, React automatically re-renders that component and updates the user interface (UI) to reflect the new state.

#### Key Concepts:
- **Data a component can hold over time**: State stores information that may change over the lifecycle of the component. For instance, the count in a counter component or the text in an input field.
- **Component's memory**: State allows the component to "remember" information between re-renders, acting like a component's memory.

#### Example:
Here’s an example of a simple counter component using React state:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initializing state

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
- **setCount** is a function that updates the state (in this case, the `count`).
- When the user clicks the "Increment" button, the `count` state changes, and the component re-renders, displaying the updated count.

### 2. **Props vs. State**

In the diagram on the right, it shows a comparison between **props** and **state**:

- **Props**: Props (short for properties) are used to pass data from a **parent component** to a **child component**. Props are read-only; they are immutable within the child component, meaning the child component cannot modify them.
  
- **State**: Unlike props, state is local to a component and can be changed or updated over time. When the state is updated, the component re-renders.

### Example to Illustrate Props and State:

Let’s consider an example where a parent component passes data (props) to a child component while also managing the child’s state internally.

#### Parent Component (with props):
```jsx
function ParentComponent() {
  const greeting = "Hello from the parent!";

  return (
    <div>
      <ChildComponent message={greeting} />
    </div>
  );
}
```
In this example, the parent component passes a prop called `message` to the child component, containing the greeting.

#### Child Component (with state):
```jsx
function ChildComponent({ message }) {
  const [count, setCount] = useState(0); // State management

  return (
    <div>
      <h1>{message}</h1>  {/* Displaying the prop from the parent */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- The `ChildComponent` receives `message` as a prop from the parent and displays it in an `<h1>` tag.
- It also manages its own state with the `useState` hook, where clicking the "Increment" button increases the `count` and re-renders the component with the updated value.

### 3. **Lifting State Up**

Sometimes, you may need to share state between different components. In such cases, you can **lift state up** to a common ancestor component and pass the state down as props. This way, multiple child components can access and manipulate the same state.

#### Example:
If both `ChildComponentA` and `ChildComponentB` need to access the same `count` state, you would lift the state up to the `ParentComponent`:

```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponentA count={count} />
      <ChildComponentB count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponentA({ count }) {
  return <h2>Count in A: {count}</h2>;
}

function ChildComponentB({ count, setCount }) {
  return (
    <div>
      <h2>Count in B: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- **State is lifted up** to the `ParentComponent`, which holds the `count` state and a method to update it (`setCount`).
- Both `ChildComponentA` and `ChildComponentB` receive the `count` as props. However, `ChildComponentB` can also modify the count by calling `setCount`.

### 4. **Why is State Important?**
- **Dynamic UIs**: Without state, React components would be static. State allows React to build dynamic and interactive user interfaces that respond to user input and changes in data.
- **Component-Scoped**: State is localized to the component, making it easy to track changes and update the component independently of others.
- **Reactivity**: React’s automatic re-rendering based on state changes allows the UI to stay in sync with the underlying data without manual DOM manipulation.

### Conclusion:

In React, **state** is crucial for building interactive UIs. It stores data that changes over time and is specific to the component. State allows components to "remember" information and react to user interactions, like clicks or form submissions. Props, on the other hand, are used to pass data from a parent component to a child, but they are immutable in the child. Understanding how to manage state and pass props effectively is key to writing efficient, maintainable React applications.

![img_3.png](img_3.png)
The image explains the concept of **state** in React and how it is used to manage dynamic content on a web application. Let's break this down and explain it in detail with examples.

### What is State?

1. **Data that a component can hold over time**:
   - State is the information that a component keeps track of over time. Unlike props, which are passed down from parent components, state is internal to the component.
   - It is **local and mutable**, meaning a component can change its state, and this change triggers a re-render of that component.

2. **Component’s memory**:
   - State acts as the "memory" of a component. It allows the component to remember certain information, such as user input, a click event, or API data.
   - This is essential for building interactive UIs, as state keeps track of what's happening in the app over time.

3. **"State variable" or "piece of state"**:
   - A state variable is just a single variable or piece of data stored in the component’s state. In React, we often use the `useState` hook to declare state variables.
   - **Example**:
     ```jsx
     const [count, setCount] = useState(0);
     ```
     Here, `count` is the state variable, and `setCount` is the function to update the value of `count`.

### Examples from the Image:

1. **Notifications and Messages (9+ badge)**:
   - In the top-right of the image, there are notification and message indicators with the value **9+**. These are likely managed by state variables. 
   - **State Example**:
     ```jsx
     const [notifications, setNotifications] = useState(9);
     const [messages, setMessages] = useState(9);
     ```
     Here, both `notifications` and `messages` are state variables keeping track of the number of new notifications and messages. As new ones come in, the state can be updated, which will update the UI.

2. **Search Input Box (with "javascript" typed)**:
   - The search input field at the top right shows a user typing **"javascript"**. The search term is typically handled using a state variable that tracks the user's input in real time.
   - **State Example**:
     ```jsx
     const [searchTerm, setSearchTerm] = useState('');
     const handleInputChange = (event) => {
       setSearchTerm(event.target.value);
     };
     ```
     Here, `searchTerm` is the state that stores the text entered by the user in the search input field. The `handleInputChange` function updates the state whenever the user types something.

3. **Tab Selection (Overview, Q&A, Notes, Announcements)**:
   - Below the search bar, there is a tab component with "Overview," "Q&A," "Notes," and "Announcements." The **Q&A** tab is highlighted, which indicates that the state is managing which tab is currently selected.
   - **State Example**:
     ```jsx
     const [activeTab, setActiveTab] = useState('Q&A');
     const handleTabChange = (tab) => {
       setActiveTab(tab);
     };
     ```
     Here, `activeTab` keeps track of which tab is currently selected. When the user clicks a different tab, `handleTabChange` will update the `activeTab` state, which will cause the corresponding content to display.

4. **Shopping Cart (with two courses)**:
   - In the shopping cart section, there are two courses listed. These items are dynamically rendered based on the state of the cart.
   - **State Example**:
     ```jsx
     const [cartItems, setCartItems] = useState([
       { name: 'Node.js Course', price: 12.99 },
       { name: 'JavaScript Course', price: 12.99 }
     ]);
     ```
     Here, `cartItems` is the state variable that holds an array of items in the cart. The app will render the cart dynamically based on the state. Adding or removing items from the cart will update the `cartItems` state and re-render the cart content.

### Why is State Important in React?

State is crucial in React because it enables dynamic behavior in applications. Without state, components would always display the same content regardless of user interactions. By managing state effectively, we can build responsive, interactive UIs.

### Conclusion:
- **State** is fundamental to making React apps interactive. It acts as the memory of a component, allowing it to remember and respond to user interactions, API data, or other changes.
- Through state variables, we can track user inputs, dynamic content like shopping carts, notifications, and selected tabs, enabling our apps to be dynamic and user-friendly.
![img_4.png](img_4.png)
The image provides a visual explanation of **React's state** and how it works within a component, as well as the relationship between props, state, and UI updates. Let's go through the concepts and how they work with examples.

### What is State?

1. **Data that a component can hold over time**:
   - **State** in React is the data that is held within a component. It is what makes a React component dynamic and allows it to "remember" information even after changes, like user input, API responses, etc.
   - It differs from **props**, which are passed to the component from a parent component. State is **internal** to the component and can be modified within the component.

2. **Component’s memory**:
   - State can be thought of as the "memory" of a component, where it stores the information needed throughout the lifecycle of the app.
   - For example, in a form input component, the text a user types is remembered by the component and stored in its state.

### Component State

- **State variable**: A single piece of data stored in a component's state. We usually define state in functional components using the `useState` hook.
  
  **Example**:
  ```jsx
  const [name, setName] = useState('John');
  ```
  - Here, `name` is the **state variable**, and `setName` is the function that updates the state. By calling `setName('Jane')`, we can change `name` from 'John' to 'Jane', triggering a re-render of the component.

- **Updating component state**: Whenever the state is updated using the `setState` or `useState` function, React re-renders the component to reflect the updated state in the UI.

  **Example**: A simple counter component:
  ```jsx
  function Counter() {
      const [count, setCount] = useState(0);

      return (
          <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
      );
  }
  ```
  - Here, `count` is a piece of state, and every time the button is clicked, the `setCount` function increments `count`. React automatically re-renders the component to show the updated count.

### Props vs. State

- **Props** are used to pass data from a parent component to a child component. Props are **read-only** and cannot be changed by the child component.
  
- **State**, on the other hand, is **local** to the component and can be modified by the component itself.

  **Example**:
  ```jsx
  function ParentComponent() {
      return <ChildComponent name="Alice" />;
  }

  function ChildComponent({ name }) {
      return <p>Hello, {name}!</p>;
  }
  ```
  - Here, `name="Alice"` is a prop passed from the `ParentComponent` to the `ChildComponent`. The child cannot modify this prop, but it can display it in the UI.

### State and UI Relationship

In React, **data** and the **UI** are tightly linked:
- When **state** changes, the **UI** updates accordingly, reflecting the new state.
- The UI is a direct representation of the state, which means React components re-render automatically when the state is updated.

  **Example**:
  ```jsx
  function Toggle() {
      const [isOn, setIsOn] = useState(false);

      return (
          <button onClick={() => setIsOn(!isOn)}>
              {isOn ? "ON" : "OFF"}
          </button>
      );
  }
  ```
  - In this example, the button displays "ON" if the `isOn` state is `true` and "OFF" if it's `false`. Clicking the button toggles the state between `true` and `false`, and the UI automatically updates to reflect the new state.

### Component Re-Rendering

- **Re-rendering** happens every time a state variable is updated. React automatically re-renders the component where the state was updated, ensuring the UI stays in sync with the state.
  
  For instance, in the **counter** example, each time the user clicks the button, the component re-renders to show the updated count.

### Conclusion:
- **State** is fundamental in React for building dynamic, interactive UIs. It allows components to remember and react to user interactions, updates from an API, or other changes over time.
- Unlike props, which are passed from parent to child components, state is internal to the component and can be modified, which triggers re-rendering of the component to reflect changes in the UI.

![img_5.png](img_5.png)

The image explains the concept of **state** in React and its importance for developers when building dynamic web applications. Let's break down the key concepts with deep explanations and examples.

### What is State in React?

1. **Data that a component can hold over time**:
   - In React, **state** refers to data that a component maintains and can change over time. This data is crucial for creating interactive user interfaces because it allows a component to "remember" information, such as user inputs or API responses, even after multiple re-renders.
   - For example, a shopping cart component in an e-commerce application might hold the state of how many items are in the cart. The count will change as users add or remove items.

2. **Component's memory**:
   - **State** can be thought of as the "memory" of the component. It stores dynamic data that a component needs to keep track of throughout the lifecycle of the app.
   - Consider a form component where the user's typed input needs to be remembered while interacting with the form:
     ```jsx
     const [username, setUsername] = useState('');

     function handleChange(e) {
         setUsername(e.target.value);
     }

     return (
         <div>
             <input type="text" value={username} onChange={handleChange} />
             <p>Hello, {username}</p>
         </div>
     );
     ```
   - In this example, the input field stores the `username` in the component's state. Every time the input changes, React updates the state using `setUsername`, allowing the component to remember what the user types.

3. **Component State**:
   - **State** is local to a component. It can only be updated by the component itself (or passed down to child components via functions). This contrasts with **props**, which are passed from a parent component and cannot be changed by the receiving component.
   - **Example**: Let's consider a counter component:
     ```jsx
     const [count, setCount] = useState(0);

     return (
         <div>
             <button onClick={() => setCount(count + 1)}>Increment</button>
             <p>Count: {count}</p>
         </div>
     );
     ```
   - Here, `count` is the component's state. When the user clicks the button, the state changes, causing React to re-render the component with the updated count.

4. **Updating State Triggers Re-rendering**:
   - When a component's state changes, React automatically re-renders the component to reflect the new state in the UI. This is a key feature of React's reactivity system.
   - In the previous counter example, clicking the button triggers an update to the state, which causes the component to re-render and display the new value of `count`.

### State Allows Developers To:

1. **Update the Component's View by Re-rendering It**:
   - React's state is a powerful mechanism that keeps the UI in sync with the data (state) of the component. Whenever the state changes, React automatically updates the rendered output without needing to manually update the DOM.
   - For example, in a to-do list app, the state holds the list of tasks:
     ```jsx
     const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

     return (
         <div>
             <ul>
                 {tasks.map((task, index) => (
                     <li key={index}>{task}</li>
                 ))}
             </ul>
             <button onClick={() => setTasks([...tasks, "New Task"])}>Add Task</button>
         </div>
     );
     ```
   - Every time a new task is added, the state changes and the list of tasks is re-rendered in the UI.

2. **Persist Local Variables Between Renders**:
   - State ensures that local variables (like form data, counters, or selections) are persisted between renders of a component. Without state, the component would lose its local data every time it re-renders.
   - For example, a quiz application might store the user's answers in the component's state. Even when the page re-renders after selecting an answer, the selected state persists:
     ```jsx
     const [selectedAnswer, setSelectedAnswer] = useState(null);

     return (
         <div>
             <p>Question: What is the capital of France?</p>
             <button onClick={() => setSelectedAnswer('Paris')}>Paris</button>
             <button onClick={() => setSelectedAnswer('London')}>London</button>
             <p>Your answer: {selectedAnswer}</p>
         </div>
     );
     ```
   - Here, `selectedAnswer` is preserved between renders, so the user's choice is always displayed until they change it.

### Final Takeaway:
**State is a tool**: By mastering state management in React, developers unlock the power of React to build dynamic, interactive, and responsive user interfaces. With state, components can react to user inputs, API data, and more, dynamically changing the view without manually manipulating the DOM.

In summary:
- **State** allows components to maintain and update data over time.
- **Props** are passed from a parent, while **state** is internal to a component.
- Updating **state** triggers a re-render, keeping the UI in sync with the underlying data.

## 5. Creating a State Variable With useState

```tsx
import {useState} from "react";

const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {

    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if (step === 3) {
            return;
        }
        setStep(step + 1);
    };
    const handlePrevious = () => {
        if (step === 1) {
            return;
        }
        setStep(step - 1);
    };

    return (
        <div className={'steps'}>
            <div className="numbers">
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <div className="message">
                step {step}:{messages[step - 1]}
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
![alt text](image.png)

In this React component, we are building a simple multi-step interface using the `useState` hook to manage state. The interface displays steps, messages corresponding to each step, and buttons to navigate between steps.

Let’s break down the code deeply, step by step, to fully understand what’s happening:

### 1. Importing React Dependencies

```js
import { useState } from "react";
```

We are importing the `useState` hook from React. This hook allows us to create and manage state variables in a functional component. In this case, we will use `useState` to track the current step in our multi-step interface.

### 2. Defining an Array of Messages

```js
const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
```

This is a simple array named `messages`, containing three strings. Each string represents a message associated with one of the steps in our interface:

- Step 1: "Learn React ⚛️"
- Step 2: "Apply for jobs 💼"
- Step 3: "Invest your new income 🤑"

### 3. Defining the Main `App` Component

```js
function App() {
```

This is the main component of our app. It encapsulates the entire functionality of our multi-step interface.

### 4. Using `useState` to Manage the Current Step

```js
const [step, setStep] = useState<number>(1);
```

Here, we declare a state variable `step` using `useState`. The initial value is set to `1`, meaning we start at the first step. `setStep` is the function we use to update the `step` state whenever the user clicks "Next" or "Previous."

#### Example:

- At the start, `step` is `1`, so the UI will show the first step and its message ("Learn React ⚛️").

### 5. Handling the "Next" Button Click

```js
const handleNext = () => {
    if (step === 3) {
        return;
    }
    setStep(step + 1);
};
```

`handleNext` is a function that will be triggered when the "Next" button is clicked. It checks whether the current step is `3` (the last step). If the step is `3`, it returns early, preventing further updates. If not, it increments the `step` by `1`.

#### Example:

- If `step` is `1`, clicking "Next" will increment `step` to `2`, displaying the second message ("Apply for jobs 💼").
- If `step` is `3`, clicking "Next" does nothing.

### 6. Handling the "Previous" Button Click

```js
const handlePrevious = () => {
    if (step === 1) {
        return;
    }
    setStep(step - 1);
};
```

`handlePrevious` is triggered when the "Previous" button is clicked. It checks whether the current step is `1` (the first step). If the step is `1`, it returns early, preventing the state from decreasing further. If not, it decrements the `step` by `1`.

#### Example:

- If `step` is `2`, clicking "Previous" will decrement `step` to `1`, displaying the first message ("Learn React ⚛️").
- If `step` is `1`, clicking "Previous" does nothing.

### 7. Rendering the UI

```js
return (
    <div className={'steps'}>
        <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
        <div className="message">
            step {step}:{messages[step - 1]}
        </div>
        <div className="buttons">
            <button onClick={handlePrevious} style={{
                backgroundColor: "#7950f2",
                color: "#fff",
            }}>Previous</button>
            <button onClick={handleNext} style={{
                backgroundColor: "#7950f2",
                color: "#fff",
            }}>Next</button>
        </div>
    </div>
);
```

Here’s how this part works:

#### a. Step Numbers

```js
<div className="numbers">
    <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
    <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
    <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
</div>
```

- This section renders three step numbers: "1", "2", and "3".
- It uses a ternary expression to dynamically add the class `active` to the step number when the current `step` is greater than or equal to that number. For example, when `step` is `2`, both step `1` and step `2` will have the `active` class, which could be used to style them differently (e.g., highlighting the steps).

#### b. Message Display

```js
<div className="message">
    step {step}:{messages[step - 1]}
</div>
```

- This displays the current step number and its corresponding message from the `messages` array. 
- Since arrays are zero-indexed, we use `messages[step - 1]` to access the correct message. For example, if `step` is `1`, `messages[0]` is "Learn React ⚛️".

#### c. Buttons

```js
<div className="buttons">
    <button onClick={handlePrevious} style={{
        backgroundColor: "#7950f2",
        color: "#fff",
    }}>Previous</button>
    <button onClick={handleNext} style={{
        backgroundColor: "#7950f2",
        color: "#fff",
    }}>Next</button>
</div>
```

- There are two buttons: "Previous" and "Next."
- The `onClick` attribute specifies which function (`handlePrevious` or `handleNext`) should be called when the button is clicked.
- The `style` attribute applies inline CSS, giving the buttons a consistent appearance (purple background and white text).

### Full Example of Behavior

1. **Initial State**: The component loads with `step` set to `1`. The displayed message is "Learn React ⚛️", and step `1` is marked as active.
2. **Click "Next"**: The `step` is incremented to `2`, the message updates to "Apply for jobs 💼", and steps `1` and `2` are marked as active.
3. **Click "Next" Again**: The `step` is incremented to `3`, the message updates to "Invest your new income 🤑", and steps `1`, `2`, and `3` are marked as active.
4. **Click "Next" Once More**: Since `step` is already `3`, nothing happens.
5. **Click "Previous"**: The `step` is decremented to `2`, the message updates to "Apply for jobs 💼", and step `3` is no longer active.

### Key Points:

- **State Management**: `useState` tracks the current step and updates it when buttons are clicked.
- **Dynamic UI**: The step number and message are dynamically updated based on the state (`step`).
- **Conditional Rendering**: We conditionally apply the `active` class to style the step numbers differently as the user progresses through the steps.
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
