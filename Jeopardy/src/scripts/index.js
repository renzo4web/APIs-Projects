import '../styles/index.scss';
import { getCategoriesAPI } from './Api/jeopardyApi';
import { init } from './App';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
init();
