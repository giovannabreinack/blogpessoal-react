import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-sky-700 flex justify-center font-serif">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/zddqh4rhi/ilustracao-da-proxima-etapa-do-gradiente.png?updatedAt=1753788300908"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home