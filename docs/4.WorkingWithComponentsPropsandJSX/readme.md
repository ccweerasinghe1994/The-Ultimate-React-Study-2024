# Working With Components, Props and JSX

## 1. Section Overview

## 2. Rendering the Root Component and Strict Mode

this is the root component of the application

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## 3. Before We Start Coding Debugging

## 4. Components as Building Blocks

### what is react component ?

A React component is a reusable, independent piece of code that returns a React element to be rendered to the page. Each component can have its own state and props. Components can be defined as classes or functions.

Components are the building blocks of any React application, and a single app usually consists of multiple components. These components can be nested within each other to allow complex applications to be built out of simple building blocks.

Here's an example of a simple functional component in React:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

In this example, `Welcome` is a React component. It accepts an object of properties (often referred to as `props`) and returns a React element. This component can be used in JSX like this: `<Welcome name="Sara" />`.

Components can also be ES6 classes:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

In this example, `Welcome` is a React component defined as an ES6 class. It has a `render` method that returns a React element.
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

## 5. Creating And Reusing a Component
```tsx
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import imagerl from "./assets/pizzas/test.jpg";
import { AspectRatio } from "./components/ui/aspect-ratio";

interface IPizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const pizzaData: IPizza[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        Hi Pizza
      </h1>
      <div className="w-[200px]">
        <AspectRatio ratio={16 / 9} className="bg-purple-400">
          <img src={imagerl} alt="image of a pizza" className="w-full h-full" />
        </AspectRatio>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-5">
          <li>Items 1</li>
          <li>Item 2</li>
        </ul>
        <ModeToggle />
      </nav>

      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />

      {/* <LoginForm /> */}
    </ThemeProvider>
  );
}

export default App;

```
![img.png](img.png)

## 6. What is JSX
![img_1.png](img_1.png)
![img_2.png](img_2.png)
![img_3.png](img_3.png)
## 7. Creating More Components
```tsx
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import imagerl from "./assets/pizzas/test.jpg";
import { AspectRatio } from "./components/ui/aspect-ratio";

interface IPizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const pizzaData: IPizza[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        Hi Pizza
      </h1>
      <div className="w-[200px]">
        <AspectRatio ratio={16 / 9} className="bg-purple-400">
          <img src={imagerl} alt="image of a pizza" className="w-full h-full" />
        </AspectRatio>
      </div>
    </>
  );
}

type THeaderProps = {};

const Header = (props: Props) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex gap-5">
        <li>
          <h1>Fast React Pizza Company</h1>;
        </li>
        <li>Items 1</li>
        <li>Item 2</li>
      </ul>
      <ModeToggle />
    </nav>
  );
};

type TMenuProps = {};

const Menu = (props: Props) => {
  return (
    <>
      <h2>Our Menu</h2>;
      <Pizza />
    </>
  );
};

type FooterProps = {};

const Footer = (props: Props) => {
  return (
    <footer>{new Date().toLocaleTimeString()}we are currently open</footer>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Menu />
      <Footer />

      {/* <LoginForm /> */}
    </ThemeProvider>
  );
}

export default App;

```

![img_4.png](img_4.png)
## 8. JavaScript Logic in Components
```tsx
type FooterProps = {};

const Footer = (props: Props) => {
  const hours = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  console.log(hours);

  const isOpen = hours >= openHour || hours <= closeHour;
  console.log("🚀 ~ Footer ~ isOpen:", isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()}we are currently open</footer>
  );
};
```
## 9. Separation of Concerns
![img_5.png](img_5.png)
![img_6.png](img_6.png)
![img_7.png](img_7.png)

Separation of Concerns (SoC) is a design principle for separating a program into distinct sections, where each section addresses a separate concern. In the context of React, it means organizing your code in a way that each component or module has a specific job or concern.

For example, in a typical React application, you might have components for the header, footer, and main content of your application. Each of these components has a specific job:

- The header component might contain navigation and branding.
- The main content component might contain the main interactive parts of the application.
- The footer component might contain copyright information and links.

Each of these components is responsible for a specific part of the application and doesn't need to know about the others. This makes the code easier to understand, test, and maintain.

Here's an example of how you might structure these components in a React application:

```jsx
function Header() {
  return (
    <header>
      {/* Navigation and branding */}
    </header>
  );
}

function MainContent() {
  return (
    <main>
      {/* Main interactive parts of the application */}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      {/* Copyright information and links */}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
```

In this example, each component has a specific concern and doesn't need to know about the others. This is the essence of Separation of Concerns in React.
## 10. Styling React Applications
```tsx
function Pizza() {
  // .pizza {
  //   display: flex;
  //   gap: 3.2rem;
  // }

  return (
    <div className="flex flex-col gap-2 py-2">
      <img
        src={imageUrl}
        alt="image of a pizza"
        className="w-32 aspect-square self-start"
      />
      <h3 className="text-xl font-normal">Pizza Spinichi</h3>
      <p className="text-sm font-light italic mb-auto">
        Tomato, mozarella, spinach, and ricotta cheese
      </p>
    </div>
  );
}

type THeaderProps = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <ul className="flex gap-5">
          <li>Items 1</li>
          <li>Item 2</li>
        </ul>
        <ModeToggle />
      </nav>
      <header className="self-stretch mt-10">
        <h1 className="text-[#edc84b] uppercase text-5xl text-center font-light relative block w-full before:block before:content-[''] before:h-[3px] before:w-[4rem] before:bg-[#edc84b] before:absolute before:top-11 before:-left-14 after:block after:content-[''] after:h-[3px] after:w-[4rem] after:bg-[#edc84b] after:absolute after:top-11 after:-right-12">
          Fast React Pizza Company
        </h1>
      </header>
    </div>
  );
};

type TMenuProps = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 gap-12 list-none">
        <Pizza />
      </div>
    </div>
  );
};

type FooterProps = {};

const Footer = (props: Props) => {
  const hours = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  console.log(hours);

  const isOpen = hours >= openHour || hours <= closeHour;
  console.log("🚀 ~ Footer ~ isOpen:", isOpen);

  return (
    <footer className="text-sm text-center">
      {new Date().toLocaleTimeString()}we are currently open
    </footer>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container flex flex-col items-center gap-12">
        <Header />
        <Menu />
        <Footer />
        {/* <LoginForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

```
## 11. Passing and Receiving Props
```tsx
type TMenuProps = {};

const Menu = (props: Props) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
                Our Menu
            </h2>
            <div className="grid grid-cols-2 gap-12 list-none">
                <Pizza
                    photoName="/src/assets/pizzas/prosciutto.jpg"
                    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                    name="Pizza Prosciutto"
                    price={18}
                    soldOut
                    key={"Pizza Prosciutto"}
                />
                <Pizza
                    photoName="/src/assets/pizzas/prosciutto.jpg"
                    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                    name="Pizza Prosciutto"
                    price={18}
                    soldOut
                    key={"Pizza Prosciutto"}
                />
            </div>
        </div>
    );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container flex flex-col items-center gap-12">
        <Header />
        <Menu />
        <Footer />
        {/* <LoginForm /> */}
      </div>
    </ThemeProvider>
  );
}

```
## 12. Props, Immutability, and One-Way Data Flow
![img_8.png](img_8.png)
![img_9.png](img_9.png)
![img_10.png](img_10.png)
![img_11.png](img_11.png)
![img_12.png](img_12.png)
## 13. CHALLENGE #1 Profile Card (v1)
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

```

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "IBM Plex Mono", sans-serif;
  background-color: #f7f7f7;
}

h1 {
  margin-bottom: 12px;
}

.card {
  width: 450px;
  margin: 40px;
  border: 4px solid #222;
}

.card::after {
  content: "";
  display: block;
}

.avatar {
  width: 100%;
  display: block;
}

.data {
  padding: 32px;
  padding-top: 24px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.skill {
  padding: 2px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

```


`Answer`
```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "IBM Plex Mono", sans-serif;
  background-color: #f7f7f7;
}

h1 {
  margin-bottom: 12px;
}

.card {
  width: 450px;
  margin: 40px;
  border: 4px solid #222;
}

.card::after {
  content: "";
  display: block;
}

.avatar {
  width: 100%;
  display: block;
}

.avatar .img {
  width: 100%;
}

.data {
  padding: 32px;
  padding-top: 24px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.skill {
  padding: 2px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

```

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Avatar = () => {
  return (
    <div className="avatar">
      <img
        className="img"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
const Intro = () => {
  return (
    <div>
      Hello i am a full stack developer. i enjoy learning new technologies
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <div className="skill">HTML CSS</div>
      <div className="skill">HTML CSS</div>
      <div className="skill">HTML CSS</div>
    </div>
  );
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h1>Chamara Weerasinghe</h1>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

![img_13.png](img_13.png)

## 14. The Rules of JSX
![img_14.png](img_14.png)
## 15. Rendering Lists
```tsx
const Menu = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl dark:border-secondary uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 gap-12 list-none">
        {pizzaData.map((pizza) => (
          <Pizza
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={pizza.price}
            soldOut
            key={pizza.name}
          />
        ))}
      </div>
    </div>
  );
};
```

![img_15.png](img_15.png)

## 16. Conditional Rendering With &&
```tsx
type TMenuProps = {};

const Menu = (props: Props) => {
  const pizzas = [];
  const numberOfPizzas = pizzas?.length;
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl dark:border-secondary uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 gap-12 list-none">
        {numberOfPizzas > 0 &&
          pizzaData.map((pizza) => (
            <Pizza
              photoName={pizza.photoName}
              ingredients={pizza.ingredients}
              name={pizza.name}
              price={pizza.price}
              soldOut
              key={pizza.name}
            />
          ))}
      </div>
    </div>
  );
};
```
![img_16.png](img_16.png)
## 17. Conditional Rendering With Ternaries
```tsx
const Menu = () => {
  const pizzas = pizzaData;
  const numberOfPizzas = pizzas?.length;
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl dark:border-secondary uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 gap-12 list-none">
        {numberOfPizzas > 0 ? (
          pizzaData.map((pizza) => (
            <Pizza
              photoName={pizza.photoName}
              ingredients={pizza.ingredients}
              name={pizza.name}
              price={pizza.price}
              soldOut
              key={pizza.name}
            />
          ))
        ) : (
          <p className="col-span-2 ">
            we are still working on our menu. Please comeback later
          </p>
        )}
      </div>
    </div>
  );
};

```

```tsx
const Footer = () => {
  const hours = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer className="text-sm text-center mb-20">
      {isOpen ? (
        <div className="flex flex-col items-center gap-6">
          <p>we are open unit {closeHour}:00. Come Visit us or order In</p>
          <Button>Order</Button>
        </div>
      ) : (
        <p>
          we are happy to well come you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};
```

![img_17.png](img_17.png)
## 18. Conditional Rendering With Multiple Returns
```tsx
const Footer = () => {
  const hours = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  if (isOpen) {
    return (
      <p>
        we are happy to well come you between {openHour}:00 to {closeHour}:00
      </p>
    );
  }

  return (
    <footer className="text-sm text-center mb-20">
      {isOpen ? (
        <div className="flex flex-col items-center gap-6">
          <p>we are open unit {closeHour}:00. Come Visit us or order In</p>
          <Button>Order</Button>
        </div>
      ) : (
        <p>
          we are happy to well come you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};
```
## 19. Extracting JSX Into a New Component

`Header.tsx`
```tsx
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <ul className="flex gap-5">
          <li>Items 1</li>
          <li>Item 2</li>
        </ul>
        <ModeToggle />
      </nav>
      <header className="self-stretch mt-10">
        <h1 className="text-[#edc84b] uppercase text-5xl text-center font-light relative block w-full before:block before:content-[''] before:h-[3px] before:w-[4rem] before:bg-[#edc84b] before:absolute before:top-11 before:-left-14 after:block after:content-[''] after:h-[3px] after:w-[4rem] after:bg-[#edc84b] after:absolute after:top-11 after:-right-12">
          Fast React Pizza Company
        </h1>
      </header>
    </div>
  );
};

export default Header;

```
`Menu.tsx`
```tsx
import { FC } from "react";
import Pizza, { IPizza } from "./Pizza";

type props = {
  pizzaList: IPizza[];
};

const Menu: FC<props> = ({ pizzaList }) => {
  const numberOfPizzas = pizzaList?.length;
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl dark:border-secondary uppercase py-3 border-t-2 inline-block border-black border-b-2 tracking-wider font-medium">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 gap-12 list-none">
        {numberOfPizzas > 0 ? (
          pizzaList.map((pizza) => (
            <Pizza
              photoName={pizza.photoName}
              ingredients={pizza.ingredients}
              name={pizza.name}
              price={pizza.price}
              soldOut
              key={pizza.name}
            />
          ))
        ) : (
          <p className="col-span-2 ">
            we are still working on our menu. Please comeback later
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;

```
`Pizza.tsx`
```tsx
import { FC } from "react";

export interface IPizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const Pizza: FC<IPizza> = ({
  ingredients,
  name,
  photoName,
  price,
  soldOut,
}) => {
  return (
    <div className={`flex gap-8 ${soldOut && ""}`}>
      <img
        src={photoName}
        alt="image of a pizza"
        className="w-32 aspect-square self-start"
      />
      <div className="flex flex-col gap-2 py-2">
        <h3 className="text-xl font-normal">{name}</h3>
        <p className="text-sm font-light italic mb-auto">{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;

```
`Footer.tsx`
```tsx
import { Button } from "./ui/button";

const Footer = () => {
  const hours = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <footer className="text-sm text-center mb-20">
      {isOpen ? (
        <div className="flex flex-col items-center gap-6">
          <p>we are open unit {closeHour}:00. Come Visit us or order In</p>
          <Button>Order</Button>
        </div>
      ) : (
        <p>
          we are happy to well come you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;

```
## 20. Destructuring Props
```tsx
import { FC } from "react";

export interface IPizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const Pizza: FC<IPizza> = ({
  ingredients,
  name,
  photoName,
  price,
  soldOut,
}) => {
  return (
    <div className={`flex gap-8 ${soldOut && ""}`}>
      <img
        src={photoName}
        alt="image of a pizza"
        className="w-32 aspect-square self-start"
      />
      <div className="flex flex-col gap-2 py-2">
        <h3 className="text-xl font-normal">{name}</h3>
        <p className="text-sm font-light italic mb-auto">{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;

```

Destructuring props in React is a JavaScript feature that allows you to extract properties from an object or items from an array quickly and straightforwardly. This is particularly useful in React because it allows you to extract the props you need in a component.

Here's an example of how you can destructure props in a React component:

```jsx
import React from 'react';

const MyComponent = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;
```

In the above example, `name` and `age` are destructured from the `props` object. This means you can use `name` and `age` directly, instead of having to use `props.name` and `props.age`.
## 21. React Fragments
React Fragments are a common pattern in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

Here's an example of how you can use React Fragments:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <div>Child A</div>
      <div>Child B</div>
    </React.Fragment>
  );
}

export default MyComponent;
```

In this example, `MyComponent` returns two `div` elements wrapped in a `React.Fragment`. This means that the two `div` elements will be siblings in the resulting DOM, even though they're returned from the same component function.

You can also use the short syntax for React Fragments, which is just empty angle brackets:

```jsx
import React from 'react';

function MyComponent() {
  return (
    <>
      <div>Child A</div>
      <div>Child B</div>
    </>
  );
}

export default MyComponent;
```

In this example, the `<>` and `</>` tags are a shorter syntax for `<React.Fragment>` and `</React.Fragment>`, respectively.
## 22. Setting Classes and Text Conditionally
```tsx
import { FC } from "react";

export interface IPizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const Pizza: FC<IPizza> = ({
  ingredients,
  name,
  photoName,
  price,
  soldOut,
}) => {
  console.log("🚀 ~ soldOut:", soldOut);
  return (
    <div className="flex gap-8">
      <img
        src={photoName}
        alt="image of a pizza"
        className={`w-32 aspect-square self-start ${
          soldOut && "opacity-80 grayscale"
        }`}
      />
      <div className={`flex flex-col gap-2 py-2 ${soldOut && "text-[#888]"}`}>
        <h3 className="text-xl font-normal">{name}</h3>
        <p className="text-sm font-light italic mb-auto">{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
};

export default Pizza;

```
![img_18.png](img_18.png)
## 23. Section Summary
![img_19.png](img_19.png)
## 24. CHALLENGE #2 Profile Card (v2)
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="https://images.unsplash.com/photo-1712242467502-678b72cc8b5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill={skills[0].skill} color={skills[0].color} level={skills[0].level} />
      <Skill skill={skills[1].skill} color={skills[1].color} level={skills[1].level} />
      <Skill skill={skills[2].skill} color={skills[2].color} level={skills[2].level} />
      <Skill skill={skills[3].skill} color={skills[3].color} level={skills[3].level} />
      <Skill skill={skills[4].skill} color={skills[4].color} level={skills[4].level} />
      <Skill skill={skills[5].skill} color={skills[5].color} level={skills[5].level} />
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
      {/* add your answer here */}
      {/*    👶 -> beginner */}
      {/*    👍 -> intermediate*/}
      {/*    💪 -> advanced */}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "IBM Plex Mono", sans-serif;
  background-color: #f7f7f7;
}

h1 {
  margin-bottom: 12px;
}

.card {
  width: 450px;
  margin: 40px;
  border: 4px solid #222;
}

.card::after {
  content: "";
  display: block;
}

.avatar {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.data {
  padding: 32px;
  padding-top: 24px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.skill {
  padding: 2px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

```
current output

![img_20.png](img_20.png)

expected output

![img_21.png](img_21.png)

Answer
```tsx
function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill.skill} color={skill.color} level={skill.level} />
            ))}
        </div>
    );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
```