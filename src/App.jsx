import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackagingList from './Components/PackagingList'
import ItemList from './Components/ItemList'

function App() {

  const [packList, setPackList] = useState([
    { item: 'Luggage', quantity: 2, isCompleted: false },
    { item: 'Ehraam', quantity: 2, isCompleted: false },
    { item: 'Slippers', quantity: 1, isCompleted: true },
    { item: 'Hand Carry', quantity: 1, isCompleted: true },
    { item: 'Passport', quantity: 1, isCompleted: false },
    { item: 'Visa', quantity: 1, isCompleted: false },
  ]);


  return (
    <div className="container">
      <Logo />
      <Form packList={packList} setPackList={setPackList} />
      <PackagingList packlist={packList} setPackList={setPackList}/>
    </div>
  );
}


export default App