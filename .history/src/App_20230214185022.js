
import './App.css';
import mintExampleAbi from './mintExampleAbi.json'
import { ethers, BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

const mintExampleAbi = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

function App() {

  const [ accounts, setAccounts ] = useState([])
  
  async function connectAccounts() {

    if (window.ethereum){
      const accounts = await window.ethereum.request({
        method : "eth_requestAccounts"
      })
      setAccounts(accounts)
    }
  }

  useEffect(())

  return (
    <div className="App">
     
    </div>
  );
}

export default App;