import { jogadoresBasquete } from './data.js'
import { loadContent } from './loadContent.js'

const section = document.querySelector('.players__cards')

export const basicPlayerCard = () => {
  section.innerHTML = ''
  jogadoresBasquete.forEach(player => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const info = document.createElement('div')
    info.setAttribute('class', 'info')
    const name = document.createElement('h3')
    const img = document.createElement('img')
    const description = document.createElement('p')
    const profile = document.createElement('button')
    profile.textContent = 'Visitar perfil'
    profile.addEventListener('click', loadContent)

    img.src = player.img
    name.textContent = player.nome
    description.textContent = player.descricao

    // LIKE ICON
    const likeBox = document.createElement('div')
    likeBox.setAttribute('class', 'like')
    likeBox.textContent = '🧡'

    info.append(name)
    info.append(description)
    info.append(profile)
    card.append(likeBox)
    card.append(img)
    card.append(info)
    section.append(card)
  })
}

export const completePlayerInformation = (
  playerImg,
  playerName,
  playerTeam
) => {
  // header
  const header = document.createElement('header')
  const img = document.createElement('img')
  const name = document.createElement('h2')
  const ul = document.createElement('ul')
  const team = document.createElement('li')
  const back = document.createElement('button')
  back.addEventListener('click', basicPlayerCard)
  back.textContent = 'Voltar'

  img.src = playerImg
  name.textContent = playerName
  team.textContent = playerTeam
  ul.append(team)
  header.append(img)
  header.append(name)
  header.append(ul)
  header.append(back)
  return header
}
