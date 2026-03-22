import { SectionHeader, Card } from "../components/UIComponents";
import { PlayCircle } from "lucide-react";

export default function VinculoRoto() {
  return (
    <div className="space-y-8">
      <SectionHeader
        emoji="💔"
        title="El Vínculo Roto"
        subtitle="Movimientos interrumpidos hacia la madre"
      />

      <Card
        delay={0.2}
        className="p-0 overflow-hidden border-dorado/30 shadow-xl"
      >
        <div className="bg-verde-oscuro p-4 flex items-center gap-3 border-b border-dorado/20">
          <PlayCircle className="text-dorado w-6 h-6" />
          <h3 className="text-white font-playfair text-lg m-0 !text-white !shadow-none">
            Video Clase: El Vínculo Roto
          </h3>
        </div>
        <div className="aspect-video w-full bg-black">
          <video
            src="/media/El_Vínculo_Roto.mp4"
            controls
            className="w-full h-full object-contain"
          />
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card delay={0.3}>
          <h3 className="text-verde-oscuro font-bold text-xl mb-3">
            ¿Qué es el vínculo roto?
          </h3>
          <p className="text-verde-oscuro/80 leading-relaxed italic">
            "Cuando la despedida o separación de la madre ocurre a una edad
            temprana, el alma del niño experimenta una interrupción."
          </p>
        </Card>
        <Card delay={0.4}>
          <h3 className="text-verde-oscuro font-bold text-xl mb-3">
            Efectos en el Adulto
          </h3>
          <ul className="space-y-2 text-verde-oscuro/80 text-sm">
            <li>• Dificultad para recibir de los demás.</li>
            <li>• Sensación de vacío constante.</li>
            <li>• Patrones de huida en relaciones de pareja.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
