import { jogadoresBasquete } from './data.js'
import { completePlayerInformation } from './tags.js'

const section = document.querySelector('.players__cards')

export const loadContent = e => {
  const el = e.target
  console.log(getIndex(el))
  const playerInfo = completePlayerInformation(
    jogadoresBasquete[getIndex(el)].img,
    jogadoresBasquete[getIndex(el)].nome,
    jogadoresBasquete[getIndex(el)].timeAtual,
    jogadoresBasquete[getIndex(el)].posicao,
    jogadoresBasquete[getIndex(el)].idade,
    jogadoresBasquete[getIndex(el)].nacionalidade,
    jogadoresBasquete[getIndex(el)].mediaPontosTemporada2017,
    jogadoresBasquete[getIndex(el)].altura,
    jogadoresBasquete[getIndex(el)].peso,
    jogadoresBasquete[getIndex(el)].salarioAnual,
    jogadoresBasquete[getIndex(el)].descricao
  )
  section.innerHTML = ''
  section.append(playerInfo)
}

function getIndex(element) {
  const playersArray = []
  jogadoresBasquete.forEach(p => {
    playersArray.push(p)
  })
  return playersArray.findIndex(
    player =>
      player.nome == element.offsetParent.lastChild.firstChild.textContent
  )
}
