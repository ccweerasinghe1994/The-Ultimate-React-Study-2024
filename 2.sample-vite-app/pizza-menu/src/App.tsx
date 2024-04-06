import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import imageUrl from "./assets/pizzas/test.jpg";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { FC } from "react";
import { Button } from "./components/ui/button";

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
    photoName: "/src/assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/src/assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/src/assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/src/assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/src/assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/src/assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
