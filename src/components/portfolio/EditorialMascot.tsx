import { useId } from "react";
import { cn } from "@/lib/utils";

type EditorialMascotProps = {
  className?: string;
  title?: string;
};

const EditorialMascot = ({
  className,
  title = "Mascotte stile Pokémon monocromatica",
}: EditorialMascotProps) => {
  const titleId = useId();

  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-labelledby={titleId}
      className={cn("h-auto w-full text-foreground", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      {/* Ombra a terra per dare profondità */}
      <ellipse
        cx="160"
        cy="290"
        rx="60"
        ry="10"
        fill="currentColor"
        opacity="0.1"
      />
      {/* Coda grande e curva (tipica dei Pokémon) */}
      <path
        d="M220 250C280 250 300 180 260 140C230 110 200 150 210 190"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      {/* Corpo a forma di pera rovesciata */}
      <path
        d="M100 240C100 270 120 290 160 290C200 290 220 270 220 240C220 210 160 200 160 200C160 200 100 210 100 240Z"
        fill="currentColor"
      />
      {/* Testa tonda e grande */}
      <circle cx="160" cy="140" r="70" fill="currentColor" />
      {/* Orecchie a punta (stile Pikachu/Eevee) */}
      <path
        d="M110 90C90 40 100 20 120 30C140 40 135 80 135 80"
        fill="currentColor"
      />
      <path
        d="M210 90C230 40 220 20 200 30C180 40 185 80 185 80"
        fill="currentColor"
      />
      {/* Occhi grandi (lo stile Pokémon usa molto i riflessi bianchi) */}
      {/* Usiamo "white" o "background" per i dettagli interni così restano visibili sul nero */}
      <circle cx="135" cy="140" r="12" fill="white" />
      <circle cx="138" cy="136" r="4" fill="currentColor" />{" "}
      {/* Pupilla/Riflesso */}
      <circle cx="185" cy="140" r="12" fill="white" />
      <circle cx="182" cy="136" r="4" fill="currentColor" />
      {/* Musetto e Guance */}
      <path
        d="M155 165C155 165 160 170 165 165"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="110" cy="165" r="8" fill="white" opacity="0.2" />{" "}
      {/* Guancia accennata */}
      <circle cx="210" cy="165" r="8" fill="white" opacity="0.2" />
      {/* Braccine corte e tenere */}
      <path
        d="M115 210C100 220 95 240 105 250"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M205 210C220 220 225 240 215 250"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Piedini */}
      <rect x="125" y="280" width="20" height="12" rx="6" fill="currentColor" />
      <rect x="175" y="280" width="20" height="12" rx="6" fill="currentColor" />
    </svg>
  );
};

export default EditorialMascot;
