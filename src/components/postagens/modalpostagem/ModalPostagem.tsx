import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 bg-sky-700 shadow-lg 
                        shadow-sky-900/50 hover:bg-white hover:text-sky-900'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;