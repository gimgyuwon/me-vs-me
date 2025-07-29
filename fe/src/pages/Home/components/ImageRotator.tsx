import { useEffect, useState } from 'react';
import { HOME_IMAGES } from '@constant/homeImage';
import { StyledImage } from '@styles/common.style';

const ImageRotator = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HOME_IMAGES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <StyledImage src={HOME_IMAGES[currentIdx]} alt="Home Image" />;
};

export default ImageRotator;
