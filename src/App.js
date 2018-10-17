import React, { Component } from 'react'
import AddForm from './AddForm'
import CharacterList from './CharacterList'

export default class App extends Component {
    render() {
        const { store } = this.props
        return (<div>
            <AddForm store={store} />
            <CharacterList store={store}/>
        </div>)
    }
}