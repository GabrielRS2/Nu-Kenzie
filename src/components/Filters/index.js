import "./index.css";
import ButtonList from "../ButtonList";
import { useEffect, useState } from "react";

function Filters({setFilter, filter}) {
  const [backgroundColorAll, setBackgroudColorAll] = useState("#FD377E");
  const [colorAll, setColorAll] = useState("#FFFFFF");
  const [backgroundColorDeposit, setBackgroudColorDeposit] = useState("#E9ECEF");
  const [colorDeposit, setColorDeposit] = useState("#5B6166");
  const [backgroundColorExpense, setBackgroudColorExpense] = useState("#E9ECEF");
  const [colorExpense, setColorExpense] = useState("#5B6166");
  
  function unSelectFilters() {
    setBackgroudColorAll("#E9ECEF");
    setColorAll("#5B6166");
    setBackgroudColorDeposit("#E9ECEF");
    setColorDeposit("#5B6166");
    setBackgroudColorExpense("#E9ECEF");
    setColorExpense("#5B6166");
  }

  useEffect(()=> {
    switch (filter) {
      case "Entrada":
        unSelectFilters()
        setBackgroudColorDeposit("#FD377E");
        setColorDeposit("#FFFFFF");
        break;
      case "Despesa":
        unSelectFilters()
        setBackgroudColorExpense("#FD377E");
        setColorExpense("#FFFFFF");
        break;
      default:
        unSelectFilters()
        setBackgroudColorAll("#FD377E");
        setColorAll("#FFFFFF");
        break;
    }  
  }, [filter])

  
  function filterAll() {
    setFilter("")
  }

  function filterDeposit() {
    setFilter("Entrada")
  }

  function filterExpense() {
    setFilter("Despesa")
  }

  

  return (
    <div className="fitersContainer">
      <p className="filterText">Resumo financeiro</p>
      <div className="filters">
        <ButtonList callback={filterAll} color={colorAll} backgroundColor={backgroundColorAll} text={"Todos"}/>
        <ButtonList callback={filterDeposit} color={colorDeposit} backgroundColor={backgroundColorDeposit} text={"Entradas"}/>
        <ButtonList callback={filterExpense} color={colorExpense} backgroundColor={backgroundColorExpense} text={"Despesas"}/>
      </div>
    </div>
  )
}

export default Filters;