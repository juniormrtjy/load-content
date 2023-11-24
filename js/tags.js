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
  playerTeam,
  playerPos,
  playerAge,
  playerNac,
  playerAvg,
  playerHeight,
  playerWeight,
  playerSalario,
  playerDesc
) => {
  // SECTION BOX
  const content = document.createElement('section')
  content.setAttribute('class', 'player__info-box')
  // header
  const header = document.createElement('header')
  const img = document.createElement('img')
  const name = document.createElement('h2')
  const ul = document.createElement('ul')
  const team = document.createElement('li')
  const back = document.createElement('button')
  back.addEventListener('click', basicPlayerCard)
  back.textContent = '<'

  img.src = playerImg
  name.textContent = playerName
  team.innerHTML = '<strong>Time:</strong> ' + playerTeam
  ul.append(team)
  header.append(img)
  header.append(name)
  header.append(ul)
  header.append(back)
  // add header on content
  content.append(header)

  // box with more information
  const playerInfo = document.createElement('article')
  playerInfo.setAttribute('class', 'player__info')
  const plPos = document.createElement('p')
  const plAge = document.createElement('p')
  const plNac = document.createElement('p')
  const plAvg = document.createElement('p')
  const plHeight = document.createElement('p')
  const plWeight = document.createElement('p')
  const plSalario = document.createElement('p')
  const plDesc = document.createElement('p')

  plPos.innerHTML = `<strong>Posição:</strong> ${playerPos}`
  plAge.innerHTML = `<strong>Idade:</strong> ${playerAge}`
  plNac.innerHTML = `<strong>Nascimento:</strong> ${playerNac}`
  plAvg.innerHTML = `<strong>Média de pontos:</strong> ${playerAvg}`
  plHeight.innerHTML = `<strong>Altura:</strong> ${playerHeight}`
  plWeight.innerHTML = `<strong>Peso:</strong> ${playerWeight}`
  plSalario.innerHTML = `<strong>Salário Anual:</strong> ${playerSalario}`
  plDesc.innerHTML = `<strong>Descrição:</strong> ${playerDesc}`

  playerInfo.append(plPos)
  playerInfo.append(plAge)
  playerInfo.append(plNac)
  playerInfo.append(plAvg)
  playerInfo.append(plHeight)
  playerInfo.append(plWeight)
  playerInfo.append(plSalario)
  playerInfo.append(plDesc)
  content.append(playerInfo)

  return content
}
