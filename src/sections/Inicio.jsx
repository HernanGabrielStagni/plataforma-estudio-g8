import { motion } from "framer-motion";
import { SectionHeader } from "../components/UIComponents";
import { PlayCircle, Presentation, Image, FileText, BookOpen, CheckSquare } from "lucide-react";

const modulos = [
  {
    icon: PlayCircle,
    color: "from-[#1a3d2b] to-[#2d6a4f]",
    badge: "3 videos",
    titulo: "Video Clases",
    descripcion:
      "Tres clases grabadas donde se desarrollan los temas centrales de la Lección 8: el vínculo roto, la coraza del carácter y el muro interno.",
  },
  {
    icon: Presentation,
    color: "from-[#7a5c00] to-[#c9a84c]",
    badge: "3 presentaciones",
    titulo: "Presentaciones",
    descripcion:
      "Presentaciones visuales en PowerPoint sobre la anatomía de la coraza, la sanación sistémica del alma y el mapeo del genograma.",
  },
  {
    icon: Image,
    color: "from-[#2d4a6a] to-[#4a7fa5]",
    badge: "3 infografías",
    titulo: "Infografías",
    descripcion:
      "Recursos gráficos que sintetizan visualmente los conceptos clave con explicaciones detalladas para facilitar la comprensión.",
  },
  {
    icon: FileText,
    color: "from-[#5a2d2d] to-[#9a4a4a]",
    badge: "PDFs + Guía",
    titulo: "Documentos",
    descripcion:
      "Material de lectura: capítulo 8 del libro modificado, el curso completo de Constelaciones y la guía de estudio de la lección.",
  },
];

const objetivos = [
  "Comprender qué es el vínculo roto y cómo afecta el desarrollo emocional.",
  "Identificar los mecanismos biopsicofísicos que forman la coraza del carácter.",
  "Reconocer el muro interno y su función de protección sistémica.",
  "Explorar los procesos de sanación del alma a través de las Constelaciones Familiares.",
  "Mapear el genograma sistémico como herramienta de autoconocimiento.",
];

export default function Inicio() {
  return (
    <div className="space-y-10 max-w-4xl">
      <SectionHeader
        emoji="🌿"
        title="Lección 8 · Bienvenida"
        subtitle="El Vínculo Roto y la Coraza del Carácter"
      />

      {/* Descripción intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-[#f5f0e8] to-[#eaf0ec] rounded-2xl p-7 border border-dorado/20 shadow-card"
      >
        <p className="text-[#1a3d2b] font-lato text-[17px] leading-relaxed mb-4">
          En esta lección exploraremos cómo las interrupciones tempranas en el
          vínculo con la madre generan patrones de protección emocional que
          persisten en la vida adulta. A través de la mirada de las
          Constelaciones Familiares, aprenderás a reconocer y sanar estas
          dinámicas sistémicas.
        </p>
        <p className="font-playfair italic text-[#2d6a4f] text-[16px] border-l-4 border-dorado pl-4">
          "La coraza no es el enemigo. Fue la respuesta inteligente del alma
          ante un dolor que no podía ser sostenido de otra manera."
        </p>
      </motion.div>

      {/* Objetivos de la lección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card-premium"
      >
        <h3 className="font-playfair font-bold text-xl text-verde-oscuro mb-5">
          Objetivos de Aprendizaje
        </h3>
        <ul className="space-y-3">
          {objetivos.map((obj, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-dorado/20 border border-dorado/40 flex items-center justify-center text-dorado font-bold text-xs flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-[#1a3d2b]/85 font-lato text-[15px] leading-relaxed">
                {obj}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Módulos disponibles */}
      <div>
        <h3 className="font-playfair font-bold text-2xl text-verde-oscuro mb-5 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-dorado" /> Contenidos de la Lección
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {modulos.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-xl p-5 border border-crema shadow-sm hover:shadow-card hover:border-dorado/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-playfair font-bold text-[#1a3d2b] text-[16px]">
                        {mod.titulo}
                      </h4>
                      <span className="text-[10px] bg-dorado/15 text-dorado font-bold px-2 py-0.5 rounded-full border border-dorado/30 uppercase tracking-wider whitespace-nowrap">
                        {mod.badge}
                      </span>
                    </div>
                    <p className="text-[#1a3d2b]/70 font-lato text-[13px] leading-relaxed">
                      {mod.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Instrucción de navegación */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-3 p-4 bg-verde-oscuro/8 rounded-xl border border-verde-oscuro/15 text-center justify-center"
      >
        <CheckSquare className="w-5 h-5 text-dorado flex-shrink-0" />
        <p className="text-[#1a3d2b]/75 font-lato text-sm">
          Usá el menú lateral para navegar entre los módulos. Al completar cada
          sección, quedará marcada automáticamente.
        </p>
      </motion.div>
    </div>
  );
}
