import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import { partOfInternet } from '#constants/services/webDevelopment';

const PartOfInternetWorld = () => (
  <CallToActionSection
    titlePart1={partOfInternet.titlePart1}
    titlePart2={partOfInternet.titlePart2}
    titlePart3={partOfInternet.titlePart3}
    description={partOfInternet.description}
    image={partOfInternet.image}
    backgroundImage={partOfInternet.backgroundImage}
    heightImage={partOfInternet.heightImage}
    imageSizes={partOfInternet.imageSizes}
  />
);

export default PartOfInternetWorld;
