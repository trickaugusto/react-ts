import { Cronometro } from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
