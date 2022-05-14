import { Selector } from "testcafe";

const waitTime = 2000

fixture`Open Market Place url in browser and maximize it,`
    .page`https://marketplace.staging.myautochek.com/en/ng`
    .beforeEach(async t => {
        await t.maximizeWindow()
    })

test("Sign in error", async t => {
    const email = 'fffff@test.com'
    const password = '1234'
    // select sign in button
    const signIn = Selector('.profile-menu').child(0)

    // click sign in button
    await t
        .click(signIn)
        .wait(waitTime)

    // fetch email, password, and log in objects
    const emailInput = Selector('.input').withAttribute('type', 'email')
    const passwordlInput = Selector('.input').withAttribute('type', 'password')
    const loginButton = Selector('.button')
    
    // enter email and password
    await t
        .typeText(emailInput, email)
        .typeText(passwordlInput, password)
    
    // click on login button
    await t
        .click(Selector(loginButton).withAttribute('type', 'submit'))
        .wait(waitTime)
    
    // fetch error object
    const errorMessage = Selector('#swal2-content')
    
    // assert that error is displayed
    await t
        .expect(Selector(errorMessage).textContent).eql('User not found. Please sign up')
    
})