var trello = TrelloPowerUp.iframe()

window.branchPrefixForm.addEventListener('submit', function (event) {
    // Stop the browser trying to submit the form itself.
    event.preventDefault()

    return trello
        .set('board', 'shared', 'branchPrefix', window.branchPrefixInput.value)
        .then(function () {
            trello.closePopup()
        })
})

trello.render(function () {
    trello.sizeTo('#branchPrefixForm').done()
})
