// Packages
import shuffle from "just-shuffle";

// Hook
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export const useSorteador = () => {

  const participantes = useListaDeParticipantes();

  return () => {
    const totalDeParticipantes = participantes.length;

    const embaralhado = shuffle(participantes)

    for (let index = 0; index < totalDeParticipantes; index++) {

      const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;

    }
  }
}