function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-500 text-white'>
            
                <div className="container flex justify-between text-lg font-serif">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar