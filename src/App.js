import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <IconStyle />
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
