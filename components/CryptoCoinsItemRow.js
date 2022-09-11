import Image from 'next/image'
import React from 'react'

const CryptoCoinsItemRow = ({coins, index}) => {
  return (
    <tr key={index}>
        <td>{index}</td>
        <td><Image width='30px' height='30px' src={coins.image} alt={coins.name}/></td>
        <td style={{display:'flex' }}>
            <span style={{}}>
                {coins.name}
            </span>
            <span style={{marginLeft: '4px', color:'gray'}} >
                {coins.symbol.toUpperCase()}
            </span>
        </td>
        <td>U$D {coins.current_price}</td>
        <td style={coins.price_change_percentage_24h > 0 ? {color: 'green'} : { color: 'red'}}>
            {coins.price_change_percentage_24h}
        </td>
        <td>{coins.total_volume}</td>
    </tr>
  )
  
}

export default CryptoCoinsItemRow