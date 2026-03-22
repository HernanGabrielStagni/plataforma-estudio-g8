import { motion } from "framer-motion";
import { SectionHeader } from "../components/UIComponents";
import { FileText, BookOpen, Download, ExternalLink, FileCheck } from "lucide-react";

const documentos = [
  {
    tipo: "PDF",
    icon: BookOpen,
    color: "from-[#1a3d2b] to-[#2d6a4f]",
    colorBadge: "bg-[#1a3d2b] text-white",
    titulo: "Capítulo 8 · Libro de Constelaciones Familiares",
    subtitulo: "Libro modificado para el curso",
    src: "/media/00_CAP_8-LIBRO Modicado CONSTELACIONES FAMILIARES.pdf",
    descripcion:
      "Lectura fundamental de la lección. Este capítulo desarrolla en profundidad la teoría del vínculo roto, la formación de la coraza del carácter y los procesos sistémicos de sanación. Es la base teórica que sustenta todos los demás materiales de la Lección 8.",
    indicaciones: [
      "Leé este material antes o después de ver las video clases",
      "Prestá atención a los conceptos de Reich y Hellinger",
      "Subrayá las frases que resuenen con tu propia experiencia",
      "Vinculá la lectura con los conceptos de las infografías",
    ],
  },
  {
    tipo: "PDF",
    icon: FileText,
    color: "from-[#5a4000] to-[#9a7020]",
    colorBadge: "bg-dorado text-verde-oscuro",
    titulo: "Curso Completo de Constelaciones Familiares",
    subtitulo: "Material de referencia general del curso",
    src: "/media/01- CURSO COMPLETO CONSTELACIONES.pdf",
    descripcion:
      "Documento de referencia integral para todo el curso. Contiene el marco teórico completo de las Constelaciones Familiares: sus principios, leyes sistémicas, metodología de trabajo y aplicaciones terapéuticas. Es un recurso de consulta permanente para profundizar en cualquier concepto.",
    indicaciones: [
      "Usá este documento como guía de referencia general",
      "Consultá las leyes sistémicas para contextualizar cada lección",
      "El glosario al final es muy útil para nuevos términos",
      "Podés descargarlo para tenerlo disponible sin conexión",
    ],
  },
  {
    tipo: "DOCX",
    icon: FileCheck,
    color: "from-[#2d4a8a] to-[#4a7af0]",
    colorBadge: "bg-[#2d4a8a] text-white",
    titulo: "Guía de Estudio · Lección 8",
    subtitulo: "Actividades y reflexiones de la unidad",
    src: "/media/G8 Guia de estudio_1.docx",
    descripcion:
      "Guía de trabajo personal para acompañar el estudio de la Lección 8. Incluye preguntas de reflexión, actividades prácticas y ejercicios de autoindagación para integrar los conceptos vistos en los videos y presentaciones a tu propia historia familiar.",
    indicaciones: [
      "Descargá la guía y trabajala en tu propio ritmo",
      "Respondé las preguntas luego de cada video o presentación",
      "Es un material para uso personal y reflexivo, no evaluativo",
      "Podés imprimirla o completarla directamente en formato digital",
    ],
  },
];

export default function Documentos() {
  return (
    <div className="space-y-10 max-w-4xl">
      <SectionHeader
        emoji="📖"
        title="Documentos"
        subtitle="Lecturas y guías de estudio para profundizar la lección"
      />

      <p className="text-[#1a3d2b]/70 font-lato text-[15px] leading-relaxed -mt-4">
        Estos documentos complementan los videos y presentaciones. Se recomienda
        descargarlos para poder estudiarlos con mayor comodidad.
      </p>

      <div className="space-y-8">
        {documentos.map((doc, i) => {
          const Icon = doc.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-crema shadow-card overflow-hidden"
            >
              {/* Encabezado */}
              <div
                className={`bg-gradient-to-r ${doc.color} px-6 py-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-white/80" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${doc.colorBadge} uppercase tracking-widest`}
                      >
                        {doc.tipo}
                      </span>
                      <span className="text-white/60 text-xs font-lato">
                        {doc.subtitulo}
                      </span>
                    </div>
                    <h3 className="text-white font-playfair text-lg font-black mt-0.5 m-0 !text-white !shadow-none">
                      {doc.titulo}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={doc.src}
                    download
                    className="flex items-center gap-1.5 text-xs bg-white/15 hover:bg-white/25 text-white px-3 py-2 rounded-full transition-all border border-white/20"
                  >
                    <Download className="w-3 h-3" /> Descargar
                  </a>
                  {doc.tipo === "PDF" && (
                    <a
                      href={doc.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs bg-white/25 hover:bg-white/35 text-white px-3 py-2 rounded-full transition-all border border-white/30"
                    >
                      <ExternalLink className="w-3 h-3" /> Ver PDF
                    </a>
                  )}
                </div>
              </div>

              {/* Cuerpo */}
              <div className="p-6 space-y-5">
                <div>
                  <h4 className="font-playfair font-bold text-[#1a3d2b] text-lg mb-2">
                    Descripción
                  </h4>
                  <p className="text-[#1a3d2b]/75 font-lato text-[15px] leading-relaxed">
                    {doc.descripcion}
                  </p>
                </div>

                <div className="bg-[#f5f0e8] rounded-xl p-5 border border-dorado/15">
                  <h4 className="font-lato font-bold text-[#7a5c00] text-xs uppercase tracking-wider mb-3">
                    Cómo aprovechar este documento
                  </h4>
                  <ul className="space-y-2">
                    {doc.indicaciones.map((ind, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-dorado mt-0.5 flex-shrink-0">→</span>
                        <span className="text-[#1a3d2b]/80 font-lato text-[14px] leading-snug">
                          {ind}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
