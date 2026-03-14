import dynamic from "next/dynamic";

const NightclubSceneCanvas = dynamic(
  () => import("@/components/scene/NightclubSceneCanvas").then((mod) => mod.NightclubSceneCanvas),
  { ssr: false }
);

export function NightclubScene() {
  return <NightclubSceneCanvas />;
}
