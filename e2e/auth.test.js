const { reloadApp } = require('detox-expo-helpers')
const faker = require('@faker-js/faker')
describe('Initial Screen', () => {
  beforeAll(async () => {
    await reloadApp()
  })

  it('should display Initial Screen', async () => {
    await expect(element(by.id('initialScreen'))).toBeVisible()
  })

  it('should have progress indicator', async () => {
    await expect(element(by.id('initialScreenProgress'))).toBeVisible()
  })

  it('should have an image', async () => {
    await expect(element(by.id('initialScreenImage'))).toBeVisible()
  })

  it('should have text "One Account"', async () => {
    await expect(element(by.id('initialScreenTextOneAccount'))).toBeVisible()
  })

  it('should have a Login button', async () => {
    await expect(element(by.id('initialScreenLoginButton'))).toBeVisible()
  })

  it('should have a Register button', async () => {
    await expect(element(by.id('initialScreenRegisterButton'))).toBeVisible()
  })

  it('should have a Google Auth button', async () => {
    await expect(element(by.id('initialScreenGoogleAuthButton'))).toBeVisible()
  })
  it('should show Register screen after tap', async () => {
    await element(by.id('initialScreenRegisterButton')).tap()
    await expect(element(by.id('registerScreen'))).toBeVisible()
  })
})

describe('Register Screen', () => {
  it('should display Register Screen', async () => {
    await expect(element(by.id('registerScreen'))).toBeVisible()
  })

  it('should have a back button', async () => {
    await expect(element(by.id('registerScreenBackButton'))).toBeVisible()
  })

  it('should have a title', async () => {
    await expect(element(by.id('registerScreenTitle'))).toBeVisible()
  })

  it('should have a scroll view', async () => {
    await expect(element(by.id('registerScreenScrollView'))).toBeVisible()
  })

  it('should have an email input label', async () => {
    await expect(element(by.id('registerScreenLabelEmailInput'))).toBeVisible()
  })

  it('should have an email input field', async () => {
    await expect(element(by.id('registerScreenEmailInput'))).toBeVisible()
  })

  it('should have a password input label', async () => {
    await expect(
      element(by.id('registerScreenLabelPasswordInput')),
    ).toBeVisible()
  })

  it('should have a password input field', async () => {
    await expect(element(by.id('registerScreenPasswordInput'))).toBeVisible()
  })

  it('should have a continue button', async () => {
    await expect(element(by.id('registerScreenButtonContinue'))).toBeVisible()
  })

  it('should have terms and privacy policy information', async () => {
    await expect(
      element(by.id('registerScreenTermsPrivacyPolicy')),
    ).toBeVisible()
  })
  it('should fill in email and password fields', async () => {
    const email = 'test@example.com'
    const password = 'Password1.'

    await element(by.id('registerScreenEmailInput')).typeText(email)
    await element(by.id('registerScreenPasswordInput')).typeText(password)

    await expect(element(by.id('registerScreenEmailInput'))).toHaveText(email)
    await expect(element(by.id('registerScreenPasswordInput'))).toHaveText(
      password,
    )
  })

  it('should clear email and password fields', async () => {
    await element(by.id('registerScreenEmailInput')).clearText()
    await element(by.id('registerScreenPasswordInput')).clearText()

    await expect(element(by.id('registerScreenEmailInput'))).toHaveText('')
    await expect(element(by.id('registerScreenPasswordInput'))).toHaveText('')
  })

  it('should have error messages displayed correctly', async () => {
    const email = 'test@example.com'
    const password = 'Pass'

    await element(by.id('registerScreenEmailInput')).typeText(email)
    await element(by.id('registerScreenPasswordInput')).typeText(password)

    await element(by.id('registerScreenButtonContinue')).tap()

    await expect(
      element(by.id('registerScreenErrorMessageTryAgain')),
    ).toBeVisible()
  })

  it('should press the back button to previous screen', async () => {
    await element(by.id('registerScreenBackButton')).tap()

    await expect(element(by.id('initialScreen'))).toBeVisible()
  })
})

describe('Login Screen', () => {
  it('should show Login screen after tap', async () => {
    await element(by.id('initialScreenLoginButton')).tap()
    await expect(element(by.id('loginScreen'))).toBeVisible()
  })

  it('should display Login screen', async () => {
    await expect(element(by.id('loginScreen'))).toBeVisible()
  })

  it('should have a back button', async () => {
    await expect(element(by.id('loginScreenBackButton'))).toBeVisible()
  })

  it('should have a title', async () => {
    await waitFor(element(by.text('Login')))
      .toBeVisible()
      .withTimeout(2000)
  })

  it('should have a scroll view', async () => {
    await expect(element(by.id('loginScreenScrollView'))).toBeVisible()
  })

  it('should have an email label', async () => {
    await expect(element(by.id('loginScreenEmailLabel'))).toBeVisible()
  })

  it('should have an email input field', async () => {
    await expect(element(by.id('loginScreenEmailInput'))).toBeVisible()
  })

  it('should have a password label', async () => {
    await expect(element(by.id('loginScreenPasswordLabel'))).toBeVisible()
  })

  it('should have a password input field', async () => {
    await expect(element(by.id('loginScreenPasswordInput'))).toBeVisible()
  })

  it('should have a login button', async () => {
    await expect(element(by.id('loginScreenButton'))).toBeVisible()
  })

  it('should have a recovery button', async () => {
    await expect(element(by.id('loginScreenRecoveryButton'))).toBeVisible()
  })

  it('should fill in email and password fields', async () => {
    const email = 'test@example.com'
    const password = 'Password123'

    await element(by.id('loginScreenEmailInput')).typeText(email)
    await element(by.id('loginScreenPasswordInput')).typeText(password)

    await expect(element(by.id('loginScreenEmailInput'))).toHaveText(email)
    await expect(element(by.id('loginScreenPasswordInput'))).toHaveText(
      password,
    )

    await element(by.id('loginScreenPasswordInput')).clearText()
    await element(by.id('loginScreenEmailInput')).clearText()

    await expect(element(by.id('loginScreenEmailInput'))).toHaveText('')
    await expect(element(by.id('loginScreenPasswordInput'))).toHaveText('')
  })

  it('should display credentials error message', async () => {
    const invalidEmail = 'invalid@example.com'
    const invalidPassword = 'invalidPass1.'

    await element(by.id('loginScreenEmailInput')).typeText(invalidEmail)
    await element(by.id('loginScreenPasswordInput')).typeText(invalidPassword)

    await expect(element(by.id('loginScreenPasswordInput'))).toHaveText(
      'invalidPass1.',
    )

    await element(by.id('loginScreenButton')).tap()

    await waitFor(element(by.id('loginScreenCredentialsErrorMessage')))
      .toBeVisible()
      .withTimeout(3000)

    await expect(
      element(by.id('loginScreenCredentialsErrorMessage')),
    ).toBeVisible()

    await element(by.id('loginScreenButtonShowPassword')).tap()
  })
})
