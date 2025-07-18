/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, ((err, resonse) => {
      if (err === null & resonse.success) {
        let modal = new Modal(document.getElementById("modal-login"));

        App.setState('user-logged');
       
        modal.close();
        this.element.reset();
      }
    }));

  }
}