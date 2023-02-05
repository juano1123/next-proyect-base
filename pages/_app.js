import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
}

export default MyApp
