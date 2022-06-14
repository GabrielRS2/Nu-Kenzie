import "./styles.css"
import Filters from "../../components/Filters";
import List from "../../components/List";
import FormButton from "../../components/FormButton";
import TotalValue from "../../components/TotalValue";
import Form from "../../components/Form";
import { useState } from "react";
import Header from "../../components/Header";

function Home() {

  const [listTransactions, setListTransactions] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [filter, setFilter] = useState("");

  return (
    <>
    <Header />
    <main className="main_page">
      <div>
      <Form showForm={showForm} setShowForm={setShowForm} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      </div>
      <div className="listContainer">
      <Filters filter={filter} setFilter={setFilter}/>
      <List setListTransactions={setListTransactions} listTransactions={listTransactions} filter={filter}/>
      <FormButton setShowForm={setShowForm} showForm={showForm}/>
      </div>
      <TotalValue listTransactions={listTransactions}/>
    </main>
  </>
  )
}

export default Home;