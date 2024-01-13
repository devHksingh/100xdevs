import React, { useEffect, useMemo, useState } from 'react'

function TestuseMemo() {

    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(()=>{
        setExchange1Data({
            returns: 100
        })
    },[])
    useEffect(()=>{
        setExchange2Data({
            returns:100
        })
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setBankData({
                income:100
            })
        },3000)
    },[])

    

    const cryptoReturns = useMemo(()=>{
        console.log('before render ');
        return exchange1Data.returns + exchange2Data.returns
        
    },[exchange1Data,exchange2Data])
    
    
    const incomeTax = (cryptoReturns + bankData.income) * 0.3 

  return (
    <div>
        <h1>hi there, your income tax returns are {incomeTax}</h1>
    </div>
  )
}

export default TestuseMemo