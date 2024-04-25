import './index.scss';
import Cardapio from '../Cardapio';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pagina-home">

      <Link to="./cardapio">Cardápio</Link>
      <Link to="./painel_controle">Painel_Controle</Link>
      <Link to="./painel_controle/cardapios">Painel_Controle_cardapios</Link>
      
      
    </div>
  );
}


