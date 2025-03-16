/**
 * Ex:
 *      Input: https://trello.com/c/UIxRh6V7/13-disable-support-chat-when-impersonating-customer
 *      Output: 13-disable-support-chat-when-impersonating-customer
 */
function getCardPathFromUrl(url) {
    return url.split('/').at(5) ?? 'Error'
}

/**
 * Ex:
 *      Input: https://trello.com/c/UIxRh6V7/13-disable-support-chat-when-impersonating-customer
 *      Output: 13
 */
function getCardNumberFromUrl(url) {
    const cardPath = getCardPathFromUrl(url)

    return cardPath.split('-').at(0) ?? 'Error'
}

/**
 * Ex:
 *      Input: https://trello.com/c/UIxRh6V7/13-disable-support-chat-when-impersonating-customer
 *      Output: disable-support-chat-when-impersonating-customer
 */
function getCardSlugFromUrl(url) {
    const cardPath = getCardPathFromUrl(url)
    const cardNumber = getCardNumberFromUrl(url)

    return cardPath.replace(`${cardNumber}-`, '')
}
