import { SectionHeader, Card } from "../components/UIComponents";
import { Presentation, Download, ExternalLink } from "lucide-react";

export default function Genograma() {
  const pptUrl = "/media/Systemic_Genogram_Mapping.pptx";
  const googleDocsViewer = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pptUrl)}&embedded=true`;

  return (
    <div className="space-y-8">
      <SectionHeader
        emoji="🗺️"
        title="Genograma Sistémico"
        subtitle="Mapeo del Genograma Sistémico"
      />

      <Card
        delay={0.2}
        className="p-0 overflow-hidden border-dorado/30 shadow-xl group"
      >
        <div className="bg-verde-oscuro p-4 flex items-center justify-between border-b border-dorado/20">
          <div className="flex items-center gap-3">
            <Presentation className="text-dorado w-6 h-6" />
            <h3 className="text-white font-playfair text-lg m-0 !text-white !shadow-none">
              Presentación: Mapeo del Genograma
            </h3>
          </div>
          <a
            href={pptUrl}
            download
            className="flex items-center gap-2 text-xs bg-dorado/20 hover:bg-dorado/40 text-dorado-claro px-3 py-1.5 rounded-full transition-all border border-dorado/30"
          >
            <Download className="w-3 h-3" /> Descargar PPT
          </a>
        </div>
        <div className="relative aspect-[16/9] w-full bg-verde-oscuro/5 overflow-hidden">
          <img
            src="/media/cover_genograma.png"
            alt="Presentación Genograma Sistémico"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
            <a
              href={pptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dorado text-verde-oscuro font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-dorado-claro transition-all scale-90 group-hover:scale-100 transform duration-300"
            >
              <ExternalLink className="w-5 h-5" /> Abrir Presentación
            </a>
            <p className="text-white/80 text-xs mt-3 font-lato italic">
              Mapa visual de fuerzas sistémicas
            </p>
          </div>
        </div>
      </Card>

      <Card delay={0.3}>
        <h3 className="text-verde-oscuro font-bold text-xl mb-4">
          La Fuerza de los Ancestros
        </h3>
        <p className="text-verde-oscuro/80 text-[15px] leading-relaxed">
          El genograma no es solo un árbol genealógico; es un mapa de fuerzas y
          destinos. Al mapear nuestro sistema, podemos identificar dónde se
          detuvo el flujo del amor y dónde podemos volver a conectarlo.
        </p>
      </Card>
    </div>
  );
}
