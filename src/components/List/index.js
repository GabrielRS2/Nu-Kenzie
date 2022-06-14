import "./index.css";
import { BsTrash } from "react-icons/bs";

function List({setListTransactions, listTransactions, filter}) {

  function remove(id) {
    console.log(listTransactions.find((item) => item.id === id))
    const newList = listTransactions.filter((item) => {return item.id !== id})
    setListTransactions(newList)
  }

  return (
    <div>
      {listTransactions.length === 0 ? (
        <>
          <p className="emptyListText">Você ainda não possui nenhum lançamento</p>
          <div className="emptyListItem">
            <div className="emptyListItem_text_one"></div>
            <div className="emptyListItem_text_two"></div>
          </div>
          <div className="emptyListItem">
            <div className="emptyListItem_text_one"></div>
            <div className="emptyListItem_text_two"></div>
          </div>
          <div className="emptyListItem">
            <div className="emptyListItem_text_one"></div>
            <div className="emptyListItem_text_two"></div>
          </div>
        </>
      ) : ( 
        <ul>
          {listTransactions.filter((item) => {return item.type.includes(filter)}).map((listItem, index) => (
           listItem.type === "Entrada" ? (
            
              <li key={index} className="listItem listItem-deposit">
                <div className="description_container">
                  <p className="description">{listItem.description}</p>
                  <p className="type">{listItem.type}</p>
                </div>
                <div className="value_container">
                  <p className="value">R$ {listItem.value.toFixed(2)}</p>
                  <button className="Trash" onClick={() => remove(listItem.id)}><BsTrash /></button>
                </div>
              </li>
            ) : (
              <li key={index} className="listItem listItem-expense">
                <div className="description_container">
                  <p className="description">{listItem.description}</p>
                  <p className="type">{listItem.type}</p>
                </div>
                <div className="value_container">
                  <p className="value">R$ {-listItem.value.toFixed(2)}</p>
                  <button className="Trash" onClick={() => remove(listItem.id)}><BsTrash /></button>
                </div>
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  )
}

export default List;