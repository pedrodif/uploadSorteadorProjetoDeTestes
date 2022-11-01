// Hooks
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const idDiseabled = participantes.length < 3;

  return(
    <footer>
      <button disabled={idDiseabled}>Iniciar brincadeira</button>
    </footer>
  )
}

export default Rodape;