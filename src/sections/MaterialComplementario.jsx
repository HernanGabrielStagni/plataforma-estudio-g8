import { SectionHeader, Card } from "../components/UIComponents";
import { Image, FileText } from "lucide-react";

export default function MaterialComplementario() {
  const infographies = [
    { title: "Infografía de Apoyo 6", src: "/media/Infografia (6).png" },
    { title: "Infografía de Apoyo 7", src: "/media/Infografia(7).png" },
    { title: "Infografía de Apoyo 8", src: "/media/Infografia(8).png" },
  ];

  const pdfs = [
    {
      title: "Libro Modificado - Capítulo 8",
      src: "/media/00_CAP_8-LIBRO Modicado CONSTELACIONES FAMILIARES.pdf",
    },
    {
      title: "Curso Completo de Constelaciones",
      src: "/media/01- CURSO COMPLETO CONSTELACIONES.pdf",
    },
  ];

  return (
    <div className="space-y-10">
      <SectionHeader
        emoji="📚"
        title="Material de Apoyo"
        subtitle="Recursos para profundizar en la Lección 8"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {infographies.map((info, idx) => (
          <Card
            key={idx}
            delay={idx * 0.1}
            className="p-0 overflow-hidden group"
          >
            <div className="aspect-[3/4] overflow-hidden bg-verde-oscuro/5">
              <img
                src={info.src}
                alt={info.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => window.open(info.src, "_blank")}
              />
            </div>
            <div className="p-3 bg-white border-t border-crema flex items-center gap-2">
              <Image className="w-4 h-4 text-dorado" />
              <span className="text-xs font-bold text-verde-oscuro/70">
                {info.title}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-verde-oscuro font-bold text-xl mb-4 flex items-center gap-2">
          <FileText className="text-dorado" /> Documentos PDF
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {pdfs.map((pdf, idx) => (
            <a
              key={idx}
              href={pdf.src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-crema shadow-sm hover:shadow-md hover:border-dorado/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-verde-logo/20 rounded-lg group-hover:bg-dorado/10 transition-colors">
                  <FileText className="w-5 h-5 text-verde-oscuro" />
                </div>
                <span className="text-sm font-bold text-verde-oscuro/80">
                  {pdf.title}
                </span>
              </div>
              <span className="text-[10px] text-dorado font-bold uppercase tracking-widest">
                Ver PDF
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
