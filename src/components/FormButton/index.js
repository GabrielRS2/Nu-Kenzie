import "./index.css";

function FormButton({setShowForm, showForm}) {
  function openForm() {
    setShowForm(true);
  }
  return (
    <div className="formButton_container">
      <button className="button_Form" onClick={() => openForm()}>Adicionar transação</button>
    </div>
  )
}

export default FormButton;