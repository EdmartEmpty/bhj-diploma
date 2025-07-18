/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
      if (err === null && response.success) {
        let modal = new Modal(document.getElementById("modal-register"));
      
        App.setState('user-logged');
        // App.getModal('register').close();
        // App.modals.register.close();
        
        modal.close();
        this.element.reset();
      }
  })
}
}