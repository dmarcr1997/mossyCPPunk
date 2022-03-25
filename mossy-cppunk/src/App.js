import Header from "./components/Header"
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x31D6a54Fe07FF0713a84274A416060Dd5a09eE77&order_direction=asc")
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return (
    <div className="app">
      <Header />
      <Main activePunk={punkListData[0]}/>
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
