import './main.scss';
import App from './components/App/App.component';

const app = new App('Tiramisu');
app.say();

if (module.hot) {
  module.hot.accept();
}
