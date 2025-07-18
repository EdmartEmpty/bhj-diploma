/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)

    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list({}, (err, response) => {
      if (response.success) {
        let selects = "";
        response.data.forEach(element => {
          selects += `<option value="${element.id}">${element.name}</option>`;
        });
        
       this.element.querySelector(".accounts-select").innerHTML = selects;
      
      }
    });
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data,(err,response)=> {
      if(response.success && err === null){
        App.update();
        this.element.reset();
       
         if(this.element.closest("form").id === `new-income-form`){
          App.getModal("newIncome").close();
         }else if(this.element.closest("form").id === `new-expense-form`){
          App.getModal("newExpense").close();
         }
      }
       
    });
  }
}