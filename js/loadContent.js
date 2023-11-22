import { jogadoresBasquete } from './data.js'
import { completePlayerInformation, basicPlayerCard } from './tags.js'

const section = document.querySelector('.players__cards')

export const loadContent = e => {
  const el = e.target
  jogadoresBasquete.forEach(player => {
    section.innerHTML = ''
    section.append(
      completePlayerInformation(player.img, player.nome, player.timeAtual)
    )
  })
}
