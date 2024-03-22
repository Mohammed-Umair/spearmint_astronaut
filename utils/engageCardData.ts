import Engage1 from "../assets/Maskgroup1.png";
import Engage2 from "../assets/Maskgroup2.png";

import Engage3 from "../assets/Maskgroup3.png";

type engageCardDataType = {
  image: any;
  text: string;
  icon: any;
  id: number;
};

export const engageCardData: engageCardDataType[] = [
  {
    id: 1,
    image: Engage1,
    text: `Native super-app + 
    trading terminal `,
    icon: "./Union.png",
  },
  {
    id: 2,
    image: Engage2,
    text: `Premium User 
    Experience `,
    icon: "./Star.png",
  },
  {
    id: 3,
    image: Engage3,
    text: `All new Perfectly 
    Crafted Tools`,
    icon: "./cube.png",
  },
];
