import React, {useState} from 'react'
import CryptoCoins from "./CryptoCoins";
import styles from "../styles/Home.module.css";


const Home = (props) => {
    const [search, setSearch] = useState('')
  return (
    <main className={styles.main}>
        <input type="text" placeholder="Search a Coin ..." className={styles.inputMain} onChange={(e) => {
            setSearch(e.target.value)
        }}/>
        <CryptoCoins props={props} search={search} />
    </main>
  )
}




export default Home