// Hooks
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Rodape = () => {
  // Hooks
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();

  // Booleans
  const idDiseabled = participantes.length < 3;

  // Functions
  const iniciar = () => {
    navigate('/sorteio')
  }

  return(
    <footer>
      <button
        disabled={idDiseabled}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
    </footer>
  )
}

export default Rodape;