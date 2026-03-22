import { motion } from "framer-motion";
import { SectionHeader } from "../components/UIComponents";
import { Presentation, Download, ExternalLink } from "lucide-react";

const presentaciones = [
  {
    id: 1,
    titulo: "Anatomía de la Coraza",
    subtitulo: "Estructura corporal y bloqueos energéticos",
    emoji: "🦴",
    pptUrl: "/media/Anatomía_de_la_Coraza.pptx",
    coverImg: "/media/cover_anatomia.png",
    descripcion:
      "Esta presentación ofrece un mapa visual detallado de los segmentos corporales donde la coraza se instala. Basada en la visión bioenergética de Reich y sus continuadores, muestra la correspondencia entre bloqueos musculares específicos y patrones emocionales reprimidos.",
    contenidos: [
      "Los 7 segmentos de la coraza: desde el ocular hasta el pélvico",
      "El rol del diafragma como gran regulador emocional",
      "Correlación entre postura corporal y historia familiar",
      "Indicadores observables de tensión crónica sistémica",
      "Primeras intervenciones en trabajo corporal constelativo",
    ],
  },
  {
    id: 2,
    titulo: "Sanación Sistémica del Alma",
    subtitulo: "Movimientos de reconciliación y apertura",
    emoji: "✨",
    pptUrl: "/media/Sanación_Sistémica_del_Alma.pptx",
    coverImg: "/media/cover_sanacion.png",
    descripcion:
      "Presentación centrada en el proceso de sanación desde la perspectiva de las Constelaciones Familiares. Describe el camino desde el rechazo y la rigidez de la coraza hacia la entrega, la aceptación y el flujo amoroso con el sistema familiar.",
    contenidos: [
      "¿Qué significa sanar desde la mirada sistémica?",
      "El movimiento del 'Sí': aceptar lo que fue como fue",
      "Roles que sostienen la coraza: el rebelde, el leal invisible",
      "Frases sanadoras y movimientos de reconciliación",
      "La diferencia entre resignación y aceptación profunda",
    ],
  },
  {
    id: 3,
    titulo: "Genograma Sistémico",
    subtitulo: "Mapeo de fuerzas y destinos familiares",
    emoji: "🗺️",
    pptUrl: "/media/Systemic_Genogram_Mapping.pptx",
    coverImg: "/media/cover_genograma.png",
    descripcion:
      "El genograma sistémico es una herramienta de autoconocimiento que va más allá del árbol genealógico. Esta presentación enseña a leer las fuerzas, los destinos y las lealtades invisibles que se transmiten a través de las generaciones, y cómo pueden ser reintegradas.",
    contenidos: [
      "Diferencia entre genograma clásico y genograma sistémico",
      "Símbolos y convenciones del mapeo familiar",
      "Identificación de exclusiones, repeticiones y lealtades",
      "Cómo leer interrupciones del flujo del amor",
      "Ejercicio práctico: construir tu propio genograma",
    ],
  },
];

export default function Presentaciones() {
  return (
    <div className="space-y-12 max-w-4xl">
      <SectionHeader
        emoji="📊"
        title="Presentaciones"
        subtitle="Material visual con análisis profundo de cada tema"
      />

      {presentaciones.map((pres, i) => (
        <motion.div
          key={pres.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="bg-white rounded-2xl border border-crema shadow-card overflow-hidden"
        >
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-[#5a4000] to-[#9a7020] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{pres.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <Presentation className="text-[#f0d070] w-4 h-4" />
                  <span className="text-[#f0d070] text-xs font-bold uppercase tracking-widest">
                    Presentación · {pres.id} de {presentaciones.length}
                  </span>
                </div>
                <h3 className="text-white font-playfair text-xl font-black mt-0.5 m-0 !text-white !shadow-none">
                  {pres.titulo}
                </h3>
                <p className="text-white/60 font-lato text-xs mt-0.5">
                  {pres.subtitulo}
                </p>
              </div>
            </div>
            <a
              href={pres.pptUrl}
              download
              className="flex items-center gap-2 text-xs bg-white/15 hover:bg-white/25 text-white px-3 py-2 rounded-full transition-all border border-white/20 whitespace-nowrap"
            >
              <Download className="w-3 h-3" /> Descargar PPT
            </a>
          </div>

          {/* Vista previa con overlay */}
          <div className="relative aspect-[16/9] w-full bg-verde-oscuro/5 overflow-hidden group">
            <img
              src={pres.coverImg}
              alt={`Presentación ${pres.titulo}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <a
                href={pres.pptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dorado text-verde-oscuro font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:bg-dorado-claro transition-all"
              >
                <ExternalLink className="w-5 h-5" /> Abrir Presentación
              </a>
              <p className="text-white/70 text-xs mt-3 font-lato italic">
                Se recomienda descargar para mejor visualización
              </p>
            </div>
          </div>

          {/* Descripción + Contenidos */}
          <div className="p-6 space-y-5">
            <div>
              <h4 className="font-playfair font-bold text-[#1a3d2b] text-lg mb-2">
                Descripción
              </h4>
              <p className="text-[#1a3d2b]/75 font-lato text-[15px] leading-relaxed">
                {pres.descripcion}
              </p>
            </div>

            <div className="bg-[#fdf8ee] rounded-xl p-5 border border-dorado/20">
              <h4 className="font-lato font-bold text-[#7a5c00] text-sm uppercase tracking-wider mb-3">
                Contenidos de la presentación
              </h4>
              <ul className="space-y-2">
                {pres.contenidos.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-dorado mt-1 flex-shrink-0 text-sm">▸</span>
                    <span className="text-[#1a3d2b]/80 font-lato text-[14px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
