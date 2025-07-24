import { useState } from "preact/hooks";
import data from "../../../data/ourCenters.js";

import OurCentersBrands from "./OurCentersBrands";
import OurCentersCenters from "./OurCentersCenters";
import OurCentersList from "./OurCentersList";

const flattenCenters = (data) => {
  const citiesObject = data[0];
  return Object.entries(citiesObject).flatMap(([city, info]) => {
    return info.centers.map((center) => ({
      ...center,
      center: center.center || center.title,
      city,
    }));
  });
};

const brandImages = {
  intensive: "/media/how-it-integrates/intensive.webp",
  kids: "/media/how-it-integrates/kids.webp",
  mentalia: "/media/how-it-integrates/mentalia.webp",
  default: "/media/hero/hero-img.webp",
};

export default function OurCentersSection() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const allCenters = flattenCenters(data);

  const filteredCenters = allCenters.filter((center) => {
    const matchesBrand = selectedBrand ? center.brand === selectedBrand : true;
    const matchesCity = selectedCity ? center.city === selectedCity : true;
    return (selectedBrand || selectedCity) && matchesBrand && matchesCity;
  });

  const imageToShow = selectedBrand
    ? brandImages[selectedBrand] || brandImages.default
    : brandImages.default;

  return (
    <>
      <div class="flex flex-col gap-y-6">
        <OurCentersBrands
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        <OurCentersCenters
          centerData={data}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedBrand={selectedBrand}
        />
      </div>

      {(selectedBrand || selectedCity) && (
        <OurCentersList centers={filteredCenters} selectedCity={selectedCity} />
      )}

      <picture
        class={`rounded-2xl overflow-hidden transition-all duration-300 ${
          !selectedBrand && !selectedCity ? "flex-[2]" : "flex-1"
        }`}
      >
        <source srcSet={imageToShow} media="(min-width: 1025px)" />
        <source srcSet={imageToShow} media="(min-width: 641px)" />
        <img
          src={imageToShow}
          alt="Fondo integración Neural"
          class="h-full w-full object-cover"
        />
      </picture>
    </>
  );
}
