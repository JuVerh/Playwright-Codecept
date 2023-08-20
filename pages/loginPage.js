const { I } = inject();

module.exports = {
  //Set locators
  signInButton:"#signin_button",
  loginForm:"#login_form",
  username:"#user_login",
  password:"user_password",
  submitButton:".btn-primary",
  errorMessage:".alert-error",

  //Create methods 
  submitLogin(username, password){
    I.fillField(this.username,username)
    I.fillField(this.password,password)
    I.click(this.submitButton)
  },

  assertLoginFormIsVisible(){
    I.seeElement(this.loginForm)
  }
}
