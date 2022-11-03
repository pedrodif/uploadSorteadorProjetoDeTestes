// Hooks
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";

const Rodape = () => {
  // Hooks
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador()

  // Booleans
  const idDiseabled = participantes.length < 3;

  // Functions
  const iniciar = () => {
    sortear()
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