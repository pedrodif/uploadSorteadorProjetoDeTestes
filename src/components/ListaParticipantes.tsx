const ListaParticipantes = () => {
  const participantes: string[] = [];
  return(
    <ul>
      {participantes.map(participante => {
         return(
          <li key={participante}>
            {participante}
          </li>
         )
      })}
    </ul>
  )
}

export default ListaParticipantes;