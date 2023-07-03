import React from "react";
import { useRouter } from "next/router";
import PedalDetailContent from "../../components/pedal-details-content";

const PedalDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PedalDetailContent id={id} />;
};

export default PedalDetailPage;
