import React from 'react'
import { requestData, receiveDataFailed } from './actions';
import { fetchChara, updateInc, updateDec, deleteChara} from './socketEvent'

const CharacterList = ({ store }) => {
  const { isFetching, characterArray } = store.getState().characters

  const handleFetchData = async () => {
    store.dispatch(requestData())
    fetchChara()
  }

  const handleUpdateCharacter = (name, type) => {
    store.dispatch(requestData())
    switch (type) {
      case "inc":
        updateInc(name)
        break;
      case "dec":
        updateDec(name)
        break;
      case "del":
        if (confirm(`${name}を一覧から削除してもよろしいですか？`)) {
          deleteChara(name)
        } else {
          store.dispatch(receiveDataFailed())
        }
        break;
    }
  }

  return (
    <div>
      {
        isFetching
          ? <h2>Now Loading...</h2>
          : <div>
              <button onClick={() => handleFetchData()}>fetch data</button>
              <ul>
              {characterArray.map(character => (
                  <li key={character.name}>
                    {`${character.name} (${character.age})`}
                    <button onClick={() => handleUpdateCharacter(character.name, "dec")}>-</button>                    
                    <button onClick={() => handleUpdateCharacter(character.name, "inc")}>+</button>
                    <button onClick={() => handleUpdateCharacter(character.name, "del")}>x</button>
                  </li>  
                ))
              }
              </ul>
            </div>
      }
    </div>
  )
}

export default CharacterList