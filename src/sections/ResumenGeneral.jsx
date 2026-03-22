import { SectionHeader, Card } from "../components/UIComponents";
import { motion } from "framer-motion";

const conceptosClave = [
  {
    numero: "1",
    titulo: "La Coraza Biopsicofísica",
    descripcion:
      "La suma total de las defensas musculares y emocionales que actúan como una barrera contra el flujo de la vida.",
    color: "from-verde-oscuro to-verde-medio",
    icon: "🛡️",
  },
  {
    numero: "2",
    titulo: "El Movimiento Interrumpido",
    descripcion:
      "La base del vínculo roto. Cuando el niño no puede alcanzar a la madre, el alma se contrae y nace la desconfianza básica.",
    color: "from-dorado to-dorado-claro",
    icon: "💔",
  },
  {
    numero: "3",
    titulo: "La Entrega Sistémica",
    descripcion:
      "El camino de sanación consiste en soltar la coraza y permitirnos, paso a paso, volver a sentir y conectar con el amor original.",
    color: "from-verde-medio to-verde-claro",
    icon: "✨",
  },
];

export default function ResumenGeneral() {
  return (
    <div>
      <SectionHeader
        emoji="📋"
        title="Síntesis · Lección 8"
        subtitle="Resumen de conceptos fundamentales"
      />

      <div className="mt-8">
        <h3 className="font-playfair font-bold text-2xl text-verde-oscuro mb-6 text-center">
          Los 3 Pilares de la Unidad
        </h3>

        <div className="grid gap-5 md:grid-cols-3">
          {conceptosClave.map((concepto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${concepto.color} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity`}
              ></div>
              <div className="relative p-6 bg-white/90 rounded-xl border border-dorado/10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${concepto.color} flex items-center justify-center text-white font-playfair font-bold text-lg shadow-sm`}
                  >
                    {concepto.numero}
                  </div>
                  <span className="text-2xl">{concepto.icon}</span>
                </div>
                <h4 className="font-playfair font-bold text-lg text-verde-oscuro mb-2">
                  {concepto.titulo}
                </h4>
                <p className="text-verde-oscuro/70 font-lato text-sm leading-relaxed">
                  {concepto.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 p-6 bg-gradient-to-r from-crema to-blanco-calido rounded-xl border border-dorado/20 text-center"
      >
        <p className="font-playfair italic text-verde-oscuro text-lg leading-relaxed">
          <span className="text-dorado text-2xl">❝</span> Solo cuando soltamos
          la coraza que nos protegió en el pasado, podemos abrazar plenamente la
          vida en el presente. <span className="text-dorado text-2xl">❞</span>
        </p>
      </motion.div>
    </div>
  );
}
