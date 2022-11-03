// Hooks
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Sorteio = () => {

  const participantes = useListaDeParticipantes();
  // Render
  return (
    <section>
        <form>
          <select name="participante da vez" id="participante da vez">
            {participantes.map(participante => {
              return(
                <option key={participante}>
                  {participante}
                </option>
              )
            })}
          </select>
        </form>
    </section>
  )
}

export default Sorteio;