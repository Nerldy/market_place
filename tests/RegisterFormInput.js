// this module handles filling in the registration form
import { Selector, t } from "testcafe"

/**
 * this handles filling in the registration form steps
 * @param {String} email enter user email
 * @param {String} password enter user password
 * @param t pass testcafe t object
 */
export async function RegisterForm(email, password) {
    // fetch email, and password objects
    const emailInput = Selector('.input').withAttribute('type', 'email')
    const passwordlInput = Selector('.input').withAttribute('type', 'password')

    // enter email and password
    await t
        .typeText(emailInput, email)
        .typeText(passwordlInput, password)

}
/**
 * click on log in button
 */

export async function subMitForm() {
    // fetch login button 
    const loginButton = Selector('.button').withAttribute('type', 'submit')

    // click on login button
    await t
        .click(Selector(loginButton))
}