import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../components/UIComponents";
import { X, ZoomIn } from "lucide-react";

const infografias = [
  {
    id: 6,
    src: "/media/Infografia (6).png",
    titulo: "El Movimiento Interrumpido",
    subtitulo: "Dinámica del vínculo roto madre-hijo",
    descripcion:
      "Esta infografía ilustra el ciclo natural del movimiento de apego del niño hacia la madre y el punto de interrupción. Muestra esquemáticamente cómo la separación temprana —ya sea física, emocional o simbólica— genera una contracción en el sistema nervioso que se convierte en la base de la desconfianza básica y la coraza protectora.",
    puntosClave: [
      "El movimiento interrumpido es el origen de la herida de base",
      "La interrupción no siempre es visible: puede ser emocional o simbólica",
      "El alma del niño interpreta la separación como abandono permanente",
      "Este patrón se repite en los vínculos adultos hasta ser reconocido",
    ],
  },
  {
    id: 7,
    src: "/media/Infografia(7).png",
    titulo: "La Coraza Biopsicofísica",
    subtitulo: "Capas de protección emocional y corporal",
    descripcion:
      "Representación gráfica de las distintas capas que componen la coraza del carácter: la muscular, la emocional y la sistémica. La infografía ayuda a identificar cómo cada capa se superpone y refuerza a las otras, generando un patrón de rigidez que protege al individuo pero también lo limita en su capacidad de sentir y conectar.",
    puntosClave: [
      "La coraza tiene tres dimensiones: corporal, emocional y sistémica",
      "Los segmentos musculares (Reich) corresponden a emociones específicas",
      "El cuerpo es el mapa de la historia familiar no procesada",
      "Identificar la capa activa es el primer paso hacia la integración",
    ],
  },
  {
    id: 8,
    src: "/media/Infografia(8).png",
    titulo: "El Camino de Sanación",
    subtitulo: "Del muro interno a la apertura sistémica",
    descripcion:
      "Esta infografía presenta el proceso de sanación como un camino por etapas: desde el reconocimiento del muro interno, pasando por la entrega a lo que fue, hasta la apertura al flujo del amor sistémico. Integra conceptos de las Constelaciones Familiares con la bioenergética y la psicología sistémica.",
    puntosClave: [
      "La sanación comienza con el reconocimiento, no con el cambio forzado",
      "El 'Sí' sistémico: aceptar la historia tal como fue",
      "La apertura al amor original no niega el dolor, lo transciende",
      "El proceso es gradual y requiere acompañamiento y presencia",
    ],
  },
];

export default function Infografias() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="space-y-10 max-w-4xl">
      <SectionHeader
        emoji="🖼️"
        title="Infografías"
        subtitle="Síntesis visual de los conceptos clave con explicación detallada"
      />

      <p className="text-[#1a3d2b]/70 font-lato text-[15px] leading-relaxed -mt-4">
        Cada infografía condensa visualmente un concepto central de la lección.
        Podés ampliarlas haciendo clic sobre la imagen para ver todos los
        detalles.
      </p>

      <div className="space-y-10">
        {infografias.map((inf, i) => (
          <motion.div
            key={inf.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white rounded-2xl border border-crema shadow-card overflow-hidden"
          >
            {/* Encabezado */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d6a4f] px-6 py-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#90caf9] text-xs font-bold uppercase tracking-widest font-lato">
                  Infografía · {i + 1} de {infografias.length}
                </span>
              </div>
              <h3 className="text-white font-playfair text-xl font-black m-0 !text-white !shadow-none">
                {inf.titulo}
              </h3>
              <p className="text-white/60 font-lato text-xs mt-0.5">
                {inf.subtitulo}
              </p>
            </div>

            {/* Layout: imagen + descripción lado a lado en desktop */}
            <div className="flex flex-col lg:flex-row">
              {/* Imagen */}
              <div
                className="relative lg:w-2/5 flex-shrink-0 bg-verde-oscuro/5 group cursor-zoom-in"
                onClick={() => setModalImg(inf)}
              >
                <img
                  src={inf.src}
                  alt={inf.titulo}
                  className="w-full h-full object-cover lg:max-h-[420px] transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-[#1a3d2b]" />
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="flex-1 p-6 space-y-5">
                <div>
                  <h4 className="font-playfair font-bold text-[#1a3d2b] text-lg mb-2">
                    ¿Qué muestra esta infografía?
                  </h4>
                  <p className="text-[#1a3d2b]/75 font-lato text-[15px] leading-relaxed">
                    {inf.descripcion}
                  </p>
                </div>

                <div className="bg-[#eaf4ef] rounded-xl p-4 border border-[#2d6a4f]/15">
                  <h4 className="font-lato font-bold text-[#1a3d2b] text-xs uppercase tracking-wider mb-3">
                    Puntos clave a observar
                  </h4>
                  <ul className="space-y-2">
                    {inf.puntosClave.map((punto, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#2d6a4f] mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-[#1a3d2b]/80 font-lato text-[13px] leading-snug">
                          {punto}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setModalImg(inf)}
                  className="text-sm text-[#2d6a4f] font-bold font-lato flex items-center gap-1.5 hover:text-dorado transition-colors"
                >
                  <ZoomIn className="w-4 h-4" /> Ver en tamaño completo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setModalImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImg(null)}
                className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-[#1a3d2b]" />
              </button>
              <img
                src={modalImg.src}
                alt={modalImg.titulo}
                className="w-full h-full object-contain rounded-xl shadow-2xl max-h-[85vh]"
              />
              <div className="text-center mt-3">
                <p className="text-white font-playfair font-bold text-lg">
                  {modalImg.titulo}
                </p>
                <p className="text-white/60 font-lato text-xs">
                  {modalImg.subtitulo}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
