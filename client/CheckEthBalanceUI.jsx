import React, { useState } from 'react';

function CheckEthBalanceUI() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  const handleCheckBalance = async () => {
    setError('');
    setBalance(null);
    try {
      const res = await fetch(`/api/check-eth-balance?address=${address}`);
      const data = await res.json();
      if (data.balance !== undefined) {
        setBalance(data.balance);
      } else {
        setError('Could not fetch balance');
      }
    } catch (e) {
      setError('Error fetching ETH balance');
    }
  };

  return (
    <div style={{maxWidth:300, margin:'auto', padding:30}}>
      <h3>Check ETH Wallet Balance</h3>
      <input
        type="text"
        placeholder="Enter ETH address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        style={{width:'100%', marginBottom:10}}
      />
      <button onClick={handleCheckBalance} style={{width:'100%'}}>Check Balance</button>
      {balance !== null && (
        <div style={{marginTop:20}}>Balance: <b>{balance} ETH</b></div>
      )}
      {error && (
        <div style={{color:'red', marginTop:10}}>{error}</div>
      )}
    </div>
  );
}

export default CheckEthBalanceUI;