function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center min-h-[80vh]">
                <div className="grid grid-cols-2 text-white w-full max-w-[1280px]">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold text-center">
                            Sejam bem vindos e bem vindas!
                        </h2>
                        <p className="text-xl">
                            Expresse aqui seus pensamentos e opiniões livremente.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded-lg text-black border-2 border-black bg-orange-500 px-4 py-2 cursor-pointer font-bold">
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/yytwlza66/caquizinha_hero_semfundo.png"
                            alt="Imagem Página Home"
                            className="w-[90%] object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;