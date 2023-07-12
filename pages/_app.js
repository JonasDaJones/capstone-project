import GlobalStyle from "../styles";
import { pedals as mockPedals } from "../lib/pedalfx-data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [pedals, setPedals] = useLocalStorageState("pedals", {
    defaultValue: mockPedals,
  });

  const handlePedalSubmit = (updatedPedals) => {
    const pedalsWithCategories = updatedPedals.map((pedal) => ({
      ...pedal,
      category: Array.isArray(pedal.category)
        ? pedal.category
        : [pedal.category],
    }));
    setPedals(pedalsWithCategories);
  };
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pedals={pedals}
        handlePedalSubmit={handlePedalSubmit}
      />
    </>
  );
}
