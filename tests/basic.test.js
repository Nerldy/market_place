import { Selector, t } from 'testcafe'
import randomEmail from 'random-email'
import { signInForm, subMitForm } from './HelperFunctions'
import generator from 'generate-password'
import * as randomName from 'random-name'
import random from 'random'

// wait time
const waitTime = 2000

fixture`Open Market Place url`
	.page`https://marketplace.staging.myautochek.com/en/ng`.beforeEach(
	async t => {
		// maximize window
		await t.maximizeWindow()
	}
)

// test("Sign in error", async t => {
//     const email = 'fffff@test.com'
//     const password = '1234'

//     // click sign in button
//     const signInButton = Selector('.profile-menu').child(0)
//     // click button
//     await t
//         .click(signInButton)
//         .wait(waitTime)

//     // register user
//     signInForm(email, password)
//     subMitForm()

//     // wait for page to load
//     await t.wait(waitTime)

//     // fetch error object
//     const errorMessage = Selector('#swal2-content')

//     // assert that error is displayed
//     await t
//         .expect(Selector(errorMessage).textContent).eql('User not found. Please sign up')

// })

// test('Register new user', async t => {
//     // generate random names, phone number, email and password
//     const firstName = randomName.first()
//     const lastName = randomName.last()
//     const phoneNumber = random.int(100000000, 999999999)
//     const email = randomEmail()
//     const password = generator.generate({
//         length: 10,
//         numbers: true
//     })
//     const referralCode = '0000'

//     // click register in button
//     const registerButton = Selector('.profile-menu').child(1)
//     // click button
//     await t
//         .click(registerButton)
//         .wait(5000) // wait 5 seconds

//     // fetch dom objects
//     const firstNameInput = Selector('.input').withAttribute('name', 'firstname')
//     const lasttNameInput = Selector('.input').withAttribute('name', 'lastname')
//     const passwordNameInput = Selector('.input').withAttribute('name', 'password')
//     const refferalCodeInput = Selector('.input').withAttribute('name', 'referrer_code')
//     const emailInput = Selector('.input').withAttribute('type', 'email')
//     const submitRegisterButton = Selector('button').withAttribute('type', 'submit')
//     const phoneNumberInput = Selector('input.form-control')

//     // input first name
//     await t
//         .click(firstNameInput)
//         .typeText(firstNameInput, firstName)

//     // input last name
//     await t
//         .pressKey('tab')
//         .typeText(lasttNameInput, lastName)

//     // input email
//     await t
//         .click(emailInput)
//         .typeText(emailInput, email)

//     // input phone number
//     await t
//         .click(phoneNumberInput)
//         .pressKey('ctrl+a delete')
//         .typeText(phoneNumberInput, `+254${phoneNumber}}`)

//     // enter password
//     await t
//         .click(passwordNameInput)
//         .typeText(passwordNameInput, password)

//     // enter refferal code
//     await t
//         .click(refferalCodeInput)
//         .typeText(refferalCodeInput, referralCode)

//     // subMitForm()
//     await t
//         .click(submitRegisterButton)
//     await t.wait(waitTime)

//     // assert Congratulations message is displayed after sign up
//     await t
//         .expect((Selector('h2').withText('Congratulations!')).exists).ok('Congratulations! is displayed')

// })

// test('Sign in user', async t => {
//     const tempUserEmail = 'pekici5821@roxoas.com'
//     const tempUserPassword = '1234'

//     // click sign in button
//     const signInButton = Selector('.profile-menu').child(0)
//     // click button
//     await t
//         .click(signInButton)
//         .wait(waitTime)

//     // register user
//     signInForm(tempUserEmail, tempUserPassword)
//     subMitForm()

//     // wait for page to load
//     await t.wait(waitTime)

//     // assert sign out button is displayed
//     await t
//         .expect(Selector('.profile-menu').child(1).innerText).contains('Sign Out')

// })

test('Search car', async t => {
	const searchAllCarsButton = Selector('a').withExactText('Search all cars')
	const searchBarInput = Selector('input').withAttribute(
		'placeholder',
		'Search for car by brand, model or any keyword'
	)
	const searchResults = Selector('.tw-capitalize.tw-font-bold')

	//  click on search all cars button
	await t.wait(waitTime).click(searchAllCarsButton)

	// type in seach bar
	await t
		.click(searchBarInput)
		.pressKey('ctrl+a delete')
		.typeText(searchBarInput, 'toyota')
		.pressKey('enter')
		.wait(waitTime)

	// assert toyota is in the results path
	await t.expect(searchResults.innerText).eql('Toyota')
})
