// States
import { resultadoAmigoSecreto } from "../atom";

// Hook
import { useSetRecoilState } from "recoil";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

// Functions
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {

  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const resultado = realizarSorteio(participantes)
    setResultado(resultado)
  }
}