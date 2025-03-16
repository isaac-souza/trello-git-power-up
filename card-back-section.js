var trello = TrelloPowerUp.iframe()

trello.card('all')
    .then((card) => {
        return trello.get('board', 'shared', 'branchPrefix')
            .then(function (branchPrefix) {
                // --------------------------------
                // Branch name, ex: eng-123/johndoe/feature/custom-fields-v1
                // --------------------------------
                let branchName = 'Unknown'

                if (typeof branchPrefix !== 'string') {
                    branchPrefix = 'Undefined'
                }

                let member = null

                try {
                    const memberFullName = slug(card.labels?.at(0)?.fullName ?? null)
                    member = (typeof memberFullName === 'string' && memberFullName.length > 0)
                        ? `/${memberFullName}`
                        : ''
                    member = slug(memberFullName).toLocaleLowerCase()
                } catch (error) {
                    console.error({ error, card })
                    member = ''
                }

                try {
                    const cardNumber = card.idShort
                    const cardSlug = getCardSlugFromUrl(card.url)
                    branchName = `${branchPrefix}-${cardNumber}${member}/${cardSlug}`
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
                    const cardNumber = card.idShort
                    taskCode = `${branchPrefix}-${cardNumber}`
                    taskCode = taskCode.toUpperCase()
                } catch (error) {
                    taskCode = 'Error'
                    console.error(error)
                }

                window.taskCodeInput.value = taskCode
            })
    })

trello.render(function () {
    trello.sizeTo('#inputsContainer').done()
})
