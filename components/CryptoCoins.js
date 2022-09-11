import React from 'react'
import CryptoCoinsItemRow from './CryptoCoinsItemRow'

const CryptoCoins = ({props, search}) => {

 const filteredCoins = props.props.dataCoingecko.filter(value => {
    return value.name.toLowerCase().includes(search.toLowerCase())
  })

  const titles = ['#', '', 'Coin', 'Price', 'Price Change', '24h Volume']

  if (!filteredCoins) return <div>no coins</div>
  return (
    <div className='containerCryptoCoins'>
      <table>
      <thead>
        <tr>
          {
            titles.map((text,index) => {
              return <td key={index} style={{width:'200px', fontWeight:'bold'}}>{text}</td>
            })
          }
        </tr>
      </thead>
        {<tbody >
          {filteredCoins.map((coin,index) => {
            return <CryptoCoinsItemRow coins={coin} key={index} index={index} />
          })}
        </tbody>}
      </table>
    </div>
  )
}

export default CryptoCoins