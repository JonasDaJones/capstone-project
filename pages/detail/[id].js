import React from "react";
import { useRouter } from "next/router";
import PedalDetailContent from "../../components/pedal-details-content";

export default function PedalDetailPage({ pedals }) {
  const router = useRouter();

  const currentPedal = pedals.find((pedal) => pedal.id == router.query.id);
  return <PedalDetailContent currentPedal={currentPedal} />;
}
