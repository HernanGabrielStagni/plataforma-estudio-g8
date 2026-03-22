import { SectionHeader, Card } from "../components/UIComponents";
import { PlayCircle, ShieldAlert } from "lucide-react";

export default function CorazaCaracter() {
  return (
    <div className="space-y-8">
      <SectionHeader
        emoji="🛡️"
        title="La Coraza del Carácter"
        subtitle="Mecanismos de defensa biopsicofísicos"
      />

      <Card
        delay={0.2}
        className="p-0 overflow-hidden border-dorado/30 shadow-xl"
      >
        <div className="bg-verde-oscuro p-4 flex items-center gap-3 border-b border-dorado/20">
          <PlayCircle className="text-dorado w-6 h-6" />
          <h3 className="text-white font-playfair text-lg m-0 !text-white !shadow-none">
            Video Clase: La Coraza del Carácter
          </h3>
        </div>
        <div className="aspect-video w-full bg-black">
          <video
            src="/media/La_Coraza_del_Carácter.mp4"
            controls
            className="w-full h-full object-contain"
          />
        </div>
      </Card>

      <Card delay={0.3} className="bg-verde-logo/10 border-l-4 border-dorado">
        <div className="flex gap-4 p-2 items-start">
          <ShieldAlert className="w-8 h-8 text-dorado flex-shrink-0" />
          <div>
            <h3 className="text-verde-oscuro font-bold text-xl mb-2">
              Definición de Coraza
            </h3>
            <p className="text-verde-oscuro/80 leading-relaxed font-lato">
              Wilhelm Reich definió la coraza como la suma total de las
              actitudes musculares y psíquicas desarrolladas por el individuo
              para protegerse contra las experiencias emocionales traumáticas.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
