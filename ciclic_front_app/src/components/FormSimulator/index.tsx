import React from 'react'

const FormSimulator = () => {
  return (
    <div>
      <form>
        <h3>Simulador</h3>
        <fieldset>
          <span>Nome</span>
          <input type="text" />
        </fieldset>
        <fieldset>
          <span>Mensalidade</span>
          <input type="number" />
        </fieldset>
        <fieldset>
          <span>Tempo</span>
          <select>
            <option value="1">1 ano</option>
            <option value="1">2 ano</option>
            <option value="1">3 ano</option>
            <option value="1">4 ano</option>
            <option value="1">5 ano</option>
          </select>
        </fieldset>
        <button type='button'>Simular</button>
      </form>
    </div>
  )
}

export default FormSimulator