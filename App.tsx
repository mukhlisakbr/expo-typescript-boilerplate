import { store } from './src/store';
import { Provider } from 'react-redux';
import { BottomTabs } from './src/navigation/bottom-tabs';

export default function App() {
  return (
    <Provider store={store}>
      <BottomTabs />
    </Provider>
  );
}
