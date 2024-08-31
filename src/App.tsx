import { Provider } from 'react-redux';
import { store } from './redux/store';

import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
