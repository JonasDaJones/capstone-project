import GlobalStyle from "../styles";
import { pedals as mockPedals } from "../lib/pedalfx-data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [pedals, setPedals] = useLocalStorageState("pedals", {
    defaultValue: mockPedals,
  });
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pedals={pedals} setPedals={setPedals} />
    </>
  );
}
