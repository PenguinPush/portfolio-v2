import { AppProvider } from '@/context/AppContext';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
