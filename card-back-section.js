var trello = TrelloPowerUp.iframe()

trello.board('id', 'name')
    .then((board) => {
        return trello.card('id', 'name', 'url')
            .then((card) => {
                return trello.get('board', 'shared', 'branchPrefix')
                    .then(function (branchPrefix) {
                        // --------------------------------
                        // Branch name, ex: eng-123/custom-fields-v1
                        // --------------------------------
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

                        // --------------------------------
                        // Task code, ex: ENG-123
                        // --------------------------------

                        let taskCode = 'Unknown'

                        try {
                            const cardNumber = getCardNumberFromUrl(card.url)
                            taskCode = `${branchPrefix}-${cardNumber}`
                            taskCode = taskCode.toUpperCase()
                        } catch (error) {
                            taskCode = 'Error'
                            console.error(error)
                        }

                        window.taskCodeInput.value = taskCode
                    })
            })
    })

trello.render(function () {
    trello.sizeTo('#inputsContainer').done()
})
