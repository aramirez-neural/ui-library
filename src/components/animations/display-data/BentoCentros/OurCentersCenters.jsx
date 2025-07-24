import OurCentersCentersItem from "./OurCentersCentersItem";

export default function OurCentersCenters({
  selectedCity,
  setSelectedCity,
  centerData,
  selectedBrand,
}) {
  const citiesObject = centerData[0];
  const cities = Object.keys(citiesObject);

  const handleClick = (city) => {
    setSelectedCity(selectedCity === city ? null : city);
  };

  return (
    <div className="border border-theme-gray rounded-2xl shadow p-6 w-sm space-y-2 flex flex-col flex-1 min-h-0">
      <h3 className="text-2xl">Nuestros centros</h3>

      <div className="flex flex-col gap-y-2 overflow-y-auto flex-1 min-h-0 pr-1">
        {cities.map((city) => {
          const allCenters = citiesObject[city].centers;
          const visibleCenters = selectedBrand
            ? allCenters.filter((c) => c.brand === selectedBrand)
            : allCenters;

          return (
            <OurCentersCentersItem
              key={city}
              city={city}
              count={visibleCenters.length}
              onClick={() => handleClick(city)}
              active={selectedCity === city}
            />
          );
        })}
      </div>
    </div>
  );
}
