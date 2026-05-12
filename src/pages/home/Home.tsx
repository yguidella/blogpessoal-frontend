function Home() {
    return (
        <>
            <div style={{
                backgroundColor: "#6A1B9A",
                display: "flex",
                justifyContent: "center",
                minHeight: "80vh"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    color: "white",
                    width: "100%",
                    maxWidth: "1280px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "1rem",
                        paddingBottom: "1rem"
                    }}>
                        <h2 style={{
                            fontSize: "3rem",
                            fontWeight: "bold"
                        }}>
                            Sejam bem vindos e bem vindas!
                        </h2>
                        <p style={{
                            fontSize: "1.25rem"
                        }}>
                            Expresse aqui seus pensamentos e opiniões livremente.
                        </p>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            gap: "1rem"
                        }}>
                            <div style={{
                                borderRadius: "0.5rem",
                                color: "black",
                                border: "2px solid black",
                                backgroundColor: "#FF9800",
                                padding: "0.5rem 1rem",
                                cursor: "pointer"
                            }}>
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img
                            src="https://ik.imagekit.io/yytwlza66/caquizinha_hero_semfundo.png"
                            alt="Imagem Página Home"
                            style={{
                                width: "90%",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;