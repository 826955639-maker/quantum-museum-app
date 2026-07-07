export type ZoneVisualType = "creation" | "perception" | "future";

type ZoneVisualProps = {
  type: ZoneVisualType;
};

/* Right-side zone card artwork. Each zone uses a dedicated transparent PNG
   illustration placed in the card's visual area. */
const SOURCES: Record<ZoneVisualType, string> = {
  creation: "/zone-creation.png",
  perception: "/zone-perception.png",
  future: "/zone-future.png",
};

export default function ZoneVisual({ type }: ZoneVisualProps) {
  return (
    <img
      className={`zone-visual zone-visual--${type}`}
      src={SOURCES[type]}
      alt=""
      aria-hidden="true"
    />
  );
}
