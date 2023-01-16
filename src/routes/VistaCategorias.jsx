const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

export const Categorias = () => {
  const [categoriasData, setCategoriasData] = useState(null);
  const [categoriaSeleccionada, setPCategoriaSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const random = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setParticipantesData(response.data.participantes);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (participantesData === null) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="container">
        <div>
          <a className="backArrow" href="#choice">
            <AiOutlineArrowLeft />
          </a>
        </div>
        <div className="containerVistaParticipantes">
          <h1 className="titleParticipantes"> CATEGORIAS </h1>
          <div className="participantesContainer">
            {Array.from(categoriasData).map((categoria) => (
              <div
                className="categorias"
                key={participantes.id}
                onClick={() => setParticipanteSeleccionado(participantes)}
              >
                <img className="participanteImg" src={participantes.mainImg} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
