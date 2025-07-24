import OurCentersListItem from "./OurCentersListItem";

export default function OurCentersList({ centers, selectedCity }) {
  const title =
    selectedCity && centers.length > 0
      ? `Centros en ${
          selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)
        }`
      : "Centros en España";

  return (
    <div className="border border-theme-gray rounded-2xl shadow p-6 space-y-2 flex flex-col flex-1 min-h-0">
      <h3 className="text-2xl">{title}</h3>

      <div className="flex flex-col gap-y-2 overflow-y-auto flex-1 min-h-0 pr-1">
        {centers.length === 0 ? (
          <p className="text-font-gray">Selecciona una marca y/o ciudad</p>
        ) : (
          centers.map((center, i) => (
            <OurCentersListItem
              key={i}
              href={center.mapsUrl}
              center={center.center}
              address={center.address}
              brand={center.brand}
            />
          ))
        )}
      </div>
    </div>
  );
}
