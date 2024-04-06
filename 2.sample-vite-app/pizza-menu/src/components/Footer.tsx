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
