import React, {useState} from 'react'
import CryptoCoins from "./CryptoCoins";
import styles from "../styles/Home.module.css";


const Home = (props) => {
    const [search, setSearch] = useState('')
  return (
    <main className={styles.main}>
        {console.log(props.props.resDolarPrice)}
        <div className='containerFiat'>
          <span style={{marginRight: '2rem'}}>Dolar ${props.props.resDolarPrice.blue.value_avg}</span>
          <span style={{marginLeft: '2rem'}}>EUR ${props.props.resDolarPrice.blue_euro.value_avg}</span>
        </div>
        
        <input type="text" placeholder="Search a Coin ..." className={styles.inputMain} onChange={(e) => {
            setSearch(e.target.value)
        }}/>
        <CryptoCoins props={props} search={search} />
    </main>
  )
}




export default Home