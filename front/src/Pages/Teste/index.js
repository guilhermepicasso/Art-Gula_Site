import './index.scss';
import ModalAdicionar from '../../Components/ModalAdicionar';
import ModalCardapio from '../../Components/ModalCardapio';
import ModalEvento from '../../Components/ModalEvento';

export default function Teste() {
    return(
        <div className='teste-pagina'>
            <ModalAdicionar/>
            <ModalCardapio/>
            <ModalEvento/>
        </div>
    );
    
}