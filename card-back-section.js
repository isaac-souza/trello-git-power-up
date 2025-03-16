var trello = TrelloPowerUp.iframe()

trello.board('id', 'name')
    .then((board) => {
        return trello.card('id', 'name', 'url')
            .then((card) => {
                return trello.get('board', 'shared', 'branchPrefix')
                    .then(function (branchPrefix) {
                        let branchName = 'Unknown'

                        if (typeof branchPrefix !== 'string') {
                            branchPrefix = 'Undefined'
                        }

                        try {
                            const cardNumber = getCardNumberFromUrl(card.url)
                            const cardSlug = getCardSlugFromUrl(card.url)
                            branchName = `${branchPrefix}-${cardNumber}/${cardSlug}`
                        } catch (error) {
                            branchName = 'Error'
                            console.error(error)
                        }

                        window.branchNameInput.value = branchName
                    })
                
            })
    })

trello.render(function () {
    trello.sizeTo('#branchNameForm').done()
})
