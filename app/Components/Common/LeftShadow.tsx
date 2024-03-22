import useIsMobile from "../../../hooks/useIsMobile";
import Image from "./image/Image";
// import { IMAGE_COLLECTIONS } from '@/app/utils/images'

const LeftShadow = () => {
  const isMobile = useIsMobile();
  return (
    <Image
      src="./Ellipse.png"
      width="400px"
      style={{ 
        // transform: "rotate(-45deg)",

       opacity: 0.2}}
    />
    // <img src="./Ellipse.png" alt="" width="100px" height="100px" />
  );
};

export default LeftShadow;
