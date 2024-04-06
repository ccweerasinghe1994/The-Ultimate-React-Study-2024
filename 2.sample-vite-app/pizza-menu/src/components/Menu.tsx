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
