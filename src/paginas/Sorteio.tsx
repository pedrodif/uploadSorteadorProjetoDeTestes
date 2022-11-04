// Hooks
import { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

const Sorteio = () => {
  // States
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  // Hooks
  const participantes = useListaDeParticipantes();
  const resultado = useResultadoSorteio();

  // Functions
  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }
  // Render
  return (
    <section>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>a
          <select
            id="participante da vez"
            name="participante da vez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
            required
          >
            <option>Selecione seu nome</option>
            {participantes.map(participante => {
              return(
                <option key={participante}>
                  {participante}
                </option>
              )
            })}
          </select>
          <button>Sortear</button>
        </form>
        {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  )
}

export default Sorteio;