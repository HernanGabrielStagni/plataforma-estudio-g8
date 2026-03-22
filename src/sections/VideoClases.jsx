import { motion } from "framer-motion";
import { SectionHeader } from "../components/UIComponents";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    id: 1,
    src: "/media/El_Vínculo_Roto.mp4",
    titulo: "El Vínculo Roto",
    subtitulo: "Movimientos interrumpidos hacia la madre",
    emoji: "💔",
    descripcion:
      "Esta clase aborda uno de los temas más profundos de las Constelaciones Familiares: el momento en que el movimiento natural del niño hacia la madre es interrumpido. Se explica cómo esta interrupción temprana genera una herida de base que impacta en todas las relaciones futuras.",
    conceptos: [
      "¿Qué ocurre cuando el niño no puede alcanzar a la madre?",
      "Cómo el alma registra la separación como abandono",
      "Efectos en la vida adulta: vacío, desconfianza y dificultad para recibir",
      "El movimiento sistémico de reparación del vínculo",
    ],
  },
  {
    id: 2,
    src: "/media/La_Coraza_del_Carácter.mp4",
    titulo: "La Coraza del Carácter",
    subtitulo: "Mecanismos de defensa biopsicofísicos",
    emoji: "🛡️",
    descripcion:
      "Basándose en la obra de Wilhelm Reich, esta clase explora cómo el cuerpo construye una coraza muscular y emocional como respuesta a los traumas tempranos. La coraza, aunque protectora en su origen, termina bloqueando el flujo natural de la energía vital y de las emociones.",
    conceptos: [
      "Wilhelm Reich y la coraza muscular",
      "Relación entre emoción, cuerpo y sistema familiar",
      "Tipos de coraza: rígida, masoquista, histérica y oral",
      "Señales físicas de la coraza en la postura y el movimiento",
    ],
  },
  {
    id: 3,
    src: "/media/El_Muro_Interno_y_la_Coraza.mp4",
    titulo: "El Muro Interno y la Coraza",
    subtitulo: "Separación y protección sistémica",
    emoji: "🧱",
    descripcion:
      "Esta clase integra los conceptos anteriores y profundiza en el fenómeno del 'muro interno': la barrera psíquica que el sistema construye para protegerse de la madre y que, paradójicamente, impide conectar con la propia vida. Se presentan herramientas de reconocimiento y apertura.",
    conceptos: [
      "La diferencia entre coraza y muro interno",
      "Cómo el rechazo a la madre se convierte en autorechazo",
      "Dinámicas relacionales que sostienen el muro",
      "Primeros pasos hacia la apertura sistémica",
    ],
  },
];

export default function VideoClases() {
  return (
    <div className="space-y-12 max-w-4xl">
      <SectionHeader
        emoji="🎬"
        title="Video Clases"
        subtitle="Tres clases que forman el núcleo teórico de la Lección 8"
      />

      {videos.map((video, i) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="bg-white rounded-2xl border border-crema shadow-card overflow-hidden"
        >
          {/* Encabezado del video */}
          <div className="bg-gradient-to-r from-[#1a3d2b] to-[#2d6a4f] px-6 py-4 flex items-center gap-3">
            <span className="text-2xl">{video.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <PlayCircle className="text-dorado w-5 h-5" />
                <span className="text-dorado text-xs font-bold uppercase tracking-widest">
                  Video Clase · {video.id} de {videos.length}
                </span>
              </div>
              <h3 className="text-white font-playfair text-xl font-black mt-0.5 !text-white !shadow-none m-0">
                {video.titulo}
              </h3>
              <p className="text-white/60 font-lato text-xs mt-0.5">
                {video.subtitulo}
              </p>
            </div>
          </div>

          {/* Reproductor */}
          <div className="aspect-video w-full bg-black">
            <video
              src={video.src}
              controls
              preload="metadata"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Descripción + Conceptos */}
          <div className="p-6 space-y-5">
            <div>
              <h4 className="font-playfair font-bold text-[#1a3d2b] text-lg mb-2">
                Sobre esta clase
              </h4>
              <p className="text-[#1a3d2b]/75 font-lato text-[15px] leading-relaxed">
                {video.descripcion}
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-xl p-5 border border-dorado/15">
              <h4 className="font-lato font-bold text-[#1a3d2b] text-sm uppercase tracking-wider mb-3">
                Temas desarrollados en esta clase
              </h4>
              <ul className="space-y-2">
                {video.conceptos.map((concepto, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-dorado mt-1 flex-shrink-0">◆</span>
                    <span className="text-[#1a3d2b]/80 font-lato text-[14px] leading-snug">
                      {concepto}
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
