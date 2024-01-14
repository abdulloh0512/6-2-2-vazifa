import Button from "./button";
import styles from "./button.module.css";

const button = [
  {
    background: "color_1",
    name: "Button 1 Idle",
  },
  {
    background: "color_2",
    name: "Button 2 Idle",
  },
  {
    background: "color_3",
    name: "Button 3 Idle",
  },
  {
    background: "color_4",
    name: "Button 4 Idle",
  },
  {
    background: "color_5",
    name: "Button 5 Idle",
  },
  {
    background: "color_6",
    name: "Button 6 Idle",
  },
];

function Tugma() {
  <div>
    {button.map((button) => (
      <Button {...button} />
    ))}
  </div>;
}

export default Tugma;
