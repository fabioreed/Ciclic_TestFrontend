import { useRouter } from 'next/router'
import React from 'react'

const Result = () => {
  const router = useRouter()
  const { name, monthlyPayment, time, result } = router.query

  console.log(name, monthlyPayment, time, result)

  return (
    <div>
      <h2>Resultado da Simu</h2>
      <p>Ola, {name}, {monthlyPayment}, {time}, {result}</p>
    </div>
  )
}

export default Result