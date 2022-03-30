import Header from "./components/Header"
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x31D6a54Fe07FF0713a84274A416060Dd5a09eE77&order_direction=asc")

      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  console.log('🔥')
  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
     
     
    </div>
  );
}

export default App;
