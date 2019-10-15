console.log('YEYYYYYY') //eslint-disable-line
const addToDeckButton = document.createElement('button')
const joinButton = document.querySelectorAll(
  'button[id^="subscribe-button-"]'
)[0]

debugger
for (const btnClass of joinButton.classList.values()) {
  addToDeckButton.classList.add(btnClass)
}

addToDeckButton.classList.add('reddit-deck-add-to-deck-button')
addToDeckButton.setAttribute('type', 'button')
addToDeckButton.textContent = 'Add To RedditDeck'
joinButton.parentElement.insertBefore(addToDeckButton, joinButton)

