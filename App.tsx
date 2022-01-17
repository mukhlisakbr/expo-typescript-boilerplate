import { store } from './src/store';
import { Provider } from 'react-redux';
import { BottomTabs } from './src/navigation/BottomTabs';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <BottomTabs />
      </NativeBaseProvider>
    </Provider>
  );
}
