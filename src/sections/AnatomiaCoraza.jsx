import { SectionHeader, Card } from "../components/UIComponents";
import { Presentation, Download, ExternalLink } from "lucide-react";

export default function AnatomiaCoraza() {
  const pptUrl = "/media/Anatomía_de_la_Coraza.pptx";
  const googleDocsViewer = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pptUrl)}&embedded=true`;

  return (
    <div className="space-y-8">
      <SectionHeader
        emoji="🦴"
        title="Anatomía de la Coraza"
        subtitle="Estructura corporal y bloqueos"
      />

      <Card
        delay={0.2}
        className="p-0 overflow-hidden border-dorado/30 shadow-xl group"
      >
        <div className="bg-verde-oscuro p-4 flex items-center justify-between border-b border-dorado/20">
          <div className="flex items-center gap-3">
            <Presentation className="text-dorado w-6 h-6" />
            <h3 className="text-white font-playfair text-lg m-0 !text-white !shadow-none">
              Presentación: Anatomía de la Coraza
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
            src="/media/cover_anatomia.png"
            alt="Presentación Anatomía de la Coraza"
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
              Se recomienda descargar para visualización completa
            </p>
          </div>
        </div>
      </Card>

      <Card delay={0.3}>
        <h3 className="text-verde-oscuro font-bold text-xl mb-4">
          Puntos Clave
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-dorado text-xl">•</span>
            <p className="text-verde-oscuro/80 text-[15px]">
              <strong>Segmentos de la coraza:</strong> Desde el ocular hasta el
              pélvico.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-dorado text-xl">•</span>
            <p className="text-verde-oscuro/80 text-[15px]">
              <strong>El diafragma:</strong> El gran regulador de las emociones
              reprimidas.
            </p>
          </li>
        </ul>
      </Card>
    </div>
  );
}
