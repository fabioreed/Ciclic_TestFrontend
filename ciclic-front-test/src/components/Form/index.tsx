'use client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
const axios = require('axios')

export interface Props {
  name: string
  monthlyPayment: string
  result: string
  time: string
}

const Form: React.FC<Props> = () => {
  const [name, setName] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState('')

  const router = useRouter()
  const taxaDeJuros = 0.00517 // 0.517% ao mes
    
  const handleSimulator = async () => {
    const tempoEmMeses = parseInt(time) * 12
    const expressao = [
      `${monthlyPayment} * (((1 + ${taxaDeJuros}) ** ${tempoEmMeses} - 1) / ${taxaDeJuros})`,
      // Adicione outras expressões aqui, se necessário
    ]
    
    axios.post('http://api.mathjs.org/v4/', {
      expr: expressao,
      precision: 14,
    })
      .then((response: { data: { result: any } }) => {
        const resultados = response.data.result
        const resultado = resultados[0]
      setResult(resultado)
        
      router.push({
        pathname: '/result',
        query: {
          nome: name,
          mensalidade: monthlyPayment,
          tempo: time,
          resultado: result,
        }
      })
    })
      .catch((error: any) => {
        // Lide com erros aqui
        console.error('Erro na solicitação POST:', error);
      })
  }

  return (
    <form>
      <h3>Simulador</h3>
      <fieldset>
        <span>Nome</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome'/>
      </fieldset>
      <fieldset>
        <span>Mensalidade</span>
        <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} placeholder='Mensalidade' />
      </fieldset>
      <fieldset>
        <span>Tempo</span>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="1 ano">1 ano</option>
          <option value="2 ano">2 ano</option>
          <option value="3 ano">3 ano</option>
          <option value="4 ano">4 ano</option>
          <option value="5 ano">5 ano</option>
          <option value="6 ano">6 ano</option>
        </select>
      </fieldset>
      <button type='button' onClick={handleSimulator}>Simular</button>
    </form>
  )
}

export default Form