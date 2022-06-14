import "./index.css";

function TotalValue({listTransactions}) {
  let totalValue = 0;

  if(listTransactions.length !== 0) {
    totalValue = listTransactions.reduce((a, b) => a + b.value, 0);
  }

  return (
    listTransactions.length !== 0 &&
    <div className="totalValue_container-position">
      <div className="totalValue_container">
        <div className="totalValue_text">
          <p className="totalValue_total">Valor total:</p>
          <p className="totalValue_description">O valor se refere ao saldo</p>
        </div>
        <p className="totalValue_value">R$ {totalValue.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default TotalValue;