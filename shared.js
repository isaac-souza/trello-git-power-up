/**
 * Ref: https://stackoverflow.com/a/5782563/6515007
 */
function slug(value) {
    value = value.replace(/^\s+|\s+$/g, '') // trim
    value = value.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;"
    var to = "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------"

    for (var i = 0, l = from.length; i < l; i++) {
        value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

    return value
}

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
