/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   */
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-open');
        document.body.classList.toggle('sidebar-collapse');
      });
    }
    
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * При нажатии на кнопку регистрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout
   */
  static initAuthLinks() {
    // Обработчик для кнопки входа
    const loginBtn = document.querySelector('.menu-item_login a');
    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = App.getModal('login');
        if (modal) {
          modal.open();
        }
      });
    }

    // Обработчик для кнопки регистрации
    const registerBtn = document.querySelector('.menu-item_register a');
    if (registerBtn) {
      registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = App.getModal('register');
        if (modal) {
          modal.open();
        }
      });
    }

    // Обработчик для кнопки выхода
    const logoutBtn = document.querySelector('.menu-item_logout a');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        User.logout((err, response) => {
          if (response && response.success) {
            App.setState('init');
          }
        });
      });
    }
  }
}