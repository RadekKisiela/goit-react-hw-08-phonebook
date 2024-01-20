import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
