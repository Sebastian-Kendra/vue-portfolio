/**
 * @param {object} data
 * @param {array} lists
 **/

export const addNewLabel = (data, lists) => {
  if (!data.color || !data?.cardId || !data?.listId) return

  let ListForNewLabel = lists.find((list) => list.id === data.listId)
  var CardForNewLabel = ListForNewLabel.cards.find(
    (card) => card.id === data.cardId
  )

  if (!Object.prototype.hasOwnProperty.call(CardForNewLabel, 'labels')) {
    Object.assign(CardForNewLabel, { labels: [] })
  }

  if (CardForNewLabel.labels.length < 6) {
    CardForNewLabel.labels.push(data.color)
  }
}

/**
 * @param {object} data
 * @param {array} lists
 **/

export const addNewCard = (data, lists) => {
  if (!data.text) return

  let listForNewCard = lists.find((list) => list.id === data.listId)

  console.log(listForNewCard)

  let cardMaxId = listForNewCard.cards.length
    ? Math.max(...listForNewCard.cards.map((card) => card.id))
    : 0

  listForNewCard.cards.push({
    id: cardMaxId + 1,
    text: data.text,
  })
}

/**
 * with cardId, from list with listId
 *
 * @param {object} data
 * @param {array} lists
 **/

export const deleteCard = (data, lists) => {
  if (!data?.cardId || !data?.listId) return

  let listToRemoveCardFrom = lists.find((list) => list.id === data.listId)

  listToRemoveCardFrom.cards = listToRemoveCardFrom.cards.filter(
    (card) => card.id !== data.cardId
  )
}

/**
 * with cardId, from list with listId
 *
 * @param {object} data
 * @param {array} lists
 **/

export const editCard = (data, lists) => {
  if (!data?.cardId || !data?.listId || !data?.newText) return

  let listForEditCardText = lists.find((list) => list.id === data.listId)

  let cardEdit = listForEditCardText.cards.find(
    (card) => card.id === data.cardId
  )

  cardEdit.text = data.newText
}
