import './index.scss';
import Cardapio from '../Cardapio';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pagina-home">

      <Link to="./cardapio">Cardápio</Link>
    </div>
  );
}

export default Home;
