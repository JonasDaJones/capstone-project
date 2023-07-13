import GlobalStyle from "../styles";
import { pedals as mockPedals } from "../lib/pedalfx-data";
import useLocalStorageState from "use-local-storage-state";
import { SWRConfig } from "swr";

async function fetcher(...args) {
  try {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function App({ Component, pageProps }) {
  const [pedals, setPedals] = useLocalStorageState("pedals", {
    defaultValue: mockPedals,
  });

  const onHandlePedalSubmit = (updatedPedals) => {
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
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component
          {...pageProps}
          pedals={pedals}
          onHandlePedalSubmit={onHandlePedalSubmit}
        />
      </SWRConfig>
    </>
  );
}
