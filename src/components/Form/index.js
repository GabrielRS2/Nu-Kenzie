import "./index.css";
import { useState } from "react";

function Form({listTransactions , setListTransactions, showForm, setShowForm,}) {

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");
  const [id, setId] = useState(0)

  function createNewTransaction(description, value, type) {
    let newValue = 0;
    if(description !== "" && value !== 0) {
    setShowForm(false)
    type === "Entrada" ? (newValue = +value) : (newValue = -value);
    const newTransaction = { description: description, type: type, value: newValue, id: id};
    setId(id + 1);
    setListTransactions([...listTransactions, newTransaction]); 
    }
  }

  return(
    <>
      <div className={showForm ? "form_container" : "form_container hidden"}>
        <div className="opacity_backgroud"></div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="label_description">Descrição</label>
          <input
          className="input_description"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
          <p className="input_example">Ex: Compra de roupas</p>
          <div className="input_type_value">
            <div className="container">
              <label className="label_value">Valor</label>
              <div className="input_value-container">
                <input
                className="input_value"
                type="number"
                placeholder="0"
                value={value}
                onChange={(event) => setValue(event.target.value)} 
                />
                <p className="value_text">R$</p>
              </div>
            </div>
            <div className="container">
              <label className="label_value">Tipo de valor</label>
              <select  value={type} onChange={(event) => setType(event.target.value)}>
                <option>Entrada</option>
                <option>Despesa</option>
              </select>
            </div>
          </div>
          <button className="addButton" type="submit" onClick={() => createNewTransaction(description, value, type)}>Enviar</button>
        </form>
      </div>
    </>
  )
}
export default Form;