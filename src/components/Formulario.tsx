// Packages
import { FormEvent, useRef, useState } from "react";

// Hooks
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";

const Formulario = () => {
  // State
  const [nome, setNome] = useState('')

  // Hooks
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNaLista = useAdicionarParticipante()
  const mensagemDeErro = useMensagemDeErro()

  // Functions
  const adicionarParticipante = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  // Render
  return(
    <form
      onSubmit={adicionarParticipante}
    >
      <input
        type="text"
        value={nome}
        ref={inputRef}
        onChange={event => setNome(event.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button
        disabled={!nome}
      >
        Adicionar
      </button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario;