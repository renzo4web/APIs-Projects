import '../styles/index.scss';
import { init } from './App';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
init();
