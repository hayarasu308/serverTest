import React from 'react'
import { changeName, changeAge, initializeForm } from './actions'
import { addChara } from './socketEvent'

const AddForm = ({ store }) => {
  const { name, age } = store.getState().form  // storeからフォームの内容を取得
  const handleSubmit = async (e) => {
    e.preventDefault()

    addChara(name, age)

    store.dispatch(initializeForm())
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))} />
        </label>
        <label>
          年齢:
          <input value={age} onChange={e => store.dispatch(changeAge(e.target.value))} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddForm