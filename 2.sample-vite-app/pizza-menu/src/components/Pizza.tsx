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
