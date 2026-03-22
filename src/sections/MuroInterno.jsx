import { SectionHeader, Card } from "../components/UIComponents";
import { PlayCircle } from "lucide-react";

export default function MuroInterno() {
  return (
    <div className="space-y-8">
      <SectionHeader
        emoji="🧱"
        title="El Muro Interno"
        subtitle="Separación y protección sistémica"
      />

      <Card
        delay={0.2}
        className="p-0 overflow-hidden border-dorado/30 shadow-xl"
      >
        <div className="bg-verde-oscuro p-4 flex items-center gap-3 border-b border-dorado/20">
          <PlayCircle className="text-dorado w-6 h-6" />
          <h3 className="text-white font-playfair text-lg m-0 !text-white !shadow-none">
            Video Clase: El Muro Interno y la Coraza
          </h3>
        </div>
        <div className="aspect-video w-full bg-black">
          <video
            src="/media/El_Muro_Interno_y_la_Coraza.mp4"
            controls
            className="w-full h-full object-contain"
          />
        </div>
      </Card>

      <Card delay={0.3} className="bg-dorado/5">
        <p className="text-[#122b1e] text-[16px] italic leading-relaxed text-center font-playfair">
          "A menudo, el muro que construimos para protegernos de la madre es el
          mismo que nos impide conectar con nuestra propia vida."
        </p>
      </Card>
    </div>
  );
}
