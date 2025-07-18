import { useState } from "preact/hooks";
import LogoIntensive from "../../../assets/LogoIntensive";
import LogoMentalia from "../../../assets/LogoMentalia";
import LogoKids from "../../../assets/LogoKids";
import CustomButtonArrow from "../../ui/CustomButtonArrow";
import LogoMentaliaSm from "../../../assets/LogoMentaliaSm";
import LogoIntensiveSm from "../../../assets/LogoIntensiveSm";
import LogoKidsSm from "../../../assets/LogoKidsSm";

const kids = {
  id: "kids",
  logo: <LogoKids />,
  logoSm: <LogoKidsSm />,
  bg: "bg-[url('/media/how-it-integrates/kids.webp')]",
  brand: "neural Kids",
  description: "Atención neuroinfantil con tecnología avanzada.",
  url: "https://neuralkids.es/",
};

const intensive = {
  id: "intensive",
  logo: <LogoIntensive />,
  logoSm: <LogoIntensiveSm />,
  bg: "bg-[url('/media/how-it-integrates/intensive.webp')]",
  brand: "neural Intensive",
  description:
    "Somos más que una rehabilitación, somos neurorrehabilitación de alto rendimiento. Utilizamos la tecnología más avanzada y basamos nuestro enfoque asistencial en lo que está demostrado científicamente que funciona para lograr los mejores resultados. En este proceso de alta exigencia para el paciente y su familia, los acompañamos y guiamos, logrando así la actitud y la confianza adecuada para que las mejoras ocurran y sean sostenibles en el tiempo.",
  url: "https://neuralintensive.com/",
};

const mentalia = {
  id: "mentalia",
  logo: <LogoMentalia />,
  logoSm: <LogoMentaliaSm />,
  bg: "bg-[url('/media/how-it-integrates/mentalia.webp')]",
  brand: "neural Mentalia",
  description: "Esto es neural Mentalia.",
  url: "https://mentaliasalud.es/",
};

export default function OurBrandsCircleSelector() {
  const [activeBrand, setActiveBrand] = useState("mentalia");

  const brandData = {
    kids,
    intensive,
    mentalia,
  };

  const current = brandData[activeBrand];

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12">
      <div class="order-2 md:order-1">
        <p class="text-base mb-6">
          <div class="mb-6">{current.logo}</div>
          <p class="text-lg">{current.description}</p>
        </p>
        <CustomButtonArrow text={current.brand} href={current.url} />
      </div>

      <div class="flex justify-center items-center order-1 md:order-2">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden -rotate-16">
          {/* KIDS */}
          <div
            className={`absolute inset-0 origin-center cursor-pointer transition-transform duration-300 ${
              activeBrand === "kids" ? "scale-[1.05] z-10" : "scale-100"
            }`}
            onMouseEnter={() => setActiveBrand("kids")}
            onClick={() => setActiveBrand("kids")}
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 75%, 47% 47%)",
              transform: "rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              className={`w-full h-full ${kids.bg} bg-cover bg-center relative`}
              style={{
                clipPath:
                  "polygon(51% 51%, 50% 0%, 100% 0%, 100% 80%, 50% 50%)",
              }}
            >
              <div
                className={`absolute inset-0 bg-theme-primary pointer-events-none transition-opacity duration-300 ${
                  activeBrand === "kids" ? "opacity-0" : "opacity-60"
                }`}
              />

              <div
                className="w-full h-full flex items-center justify-center"
                style={{ transform: "rotate(0deg)" }}
              >
                <div className="absolute bottom-[55%] right-[5%] text-theme-white rotate-16 block md:hidden">
                  {kids.logoSm}
                </div>

                <div className="hidden md:block absolute bottom-[55%] right-10 text-theme-white rotate-16">
                  {kids.logo}
                </div>
              </div>
            </div>
          </div>

          {/* INTENSIVE */}
          <div
            className={`absolute inset-0 origin-center cursor-pointer transition-transform duration-300 ${
              activeBrand === "intensive" ? "scale-[1.05] z-10" : "scale-100"
            }`}
            onMouseEnter={() => setActiveBrand("intensive")}
            onClick={() => setActiveBrand("intensive")}
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 75%, 45% 45%)",
              transform: "rotate(120deg)",
            }}
          >
            <div
              className={`w-full h-full ${intensive.bg} bg-cover bg-center`}
              style={{
                clipPath:
                  "polygon(51% 51%, 50% 0%, 100% 0%, 100% 80%, 50% 50%)",
              }}
            >
              <div
                className={`absolute inset-0 bg-theme-primary pointer-events-none transition-opacity duration-300 ${
                  activeBrand === "intensive" ? "opacity-0" : "opacity-60"
                }`}
              />

              <div
                className="w-full h-full flex items-center justify-center"
                style={{ transform: "rotate(-120deg)" }}
              >
                <div className="absolute bottom-[15%] left-[30%] text-theme-white rotate-16 block md:hidden">
                  {intensive.logoSm}
                </div>

                <div className="hidden md:block absolute top-2/3 ml-12 text-theme-white rotate-16">
                  {intensive.logo}
                </div>
              </div>
            </div>
          </div>

          {/* MENTALIA */}
          <div
            className={`absolute inset-0 origin-center cursor-pointer transition-transform duration-300 ${
              activeBrand === "mentalia" ? "scale-[1.05] z-10" : "scale-100"
            }`}
            onMouseEnter={() => setActiveBrand("mentalia")}
            onClick={() => setActiveBrand("mentalia")}
            style={{
              clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 75%, 45% 45%)",
              transform: "rotate(240deg)",
            }}
          >
            <div
              className={`w-full h-full ${mentalia.bg} bg-cover bg-center`}
              style={{
                clipPath:
                  "polygon(51% 51%, 50% 0%, 100% 0%, 100% 79%, 50% 50%)",
              }}
            >
              <div
                className={`absolute inset-0 bg-theme-primary pointer-events-none transition-opacity duration-300 ${
                  activeBrand === "mentalia" ? "opacity-0" : "opacity-60"
                }`}
              />

              <div
                className="w-full h-full flex items-center justify-center"
                style={{ transform: "rotate(-240deg)" }}
              >
                <div className="absolute bottom-[55%] left-5 text-theme-white rotate-16 block md:hidden">
                  {mentalia.logoSm}
                </div>

                <div className="hidden md:block absolute bottom-[55%] left-10 text-theme-white rotate-16">
                  {mentalia.logo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
