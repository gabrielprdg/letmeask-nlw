import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

const TestContext = createContext('')

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path="/" component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
