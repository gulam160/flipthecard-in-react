import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Flipcard = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlip = (): void => {
    setFlipped(!flipped);
  };

  return (
    <ReactCardFlip
      flipDirection="horizontal"
      isFlipped={flipped}
      infinite={true}
      containerClassName="w-full h-full flex items-center relative"
    >
      <FrontCard handleFlip={handleFlip} />
      <BackCard handleFlip={handleFlip} />
    </ReactCardFlip>
  );
};

export default Flipcard;
