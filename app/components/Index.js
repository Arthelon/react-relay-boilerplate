import Relay from 'react-relay'
import React from 'react'

const Index = (props) => {
    console.log(props)
    return (
        <div>
            <h1>React Relay Boilerplate</h1>
        </div>
    )
}

export default Relay.createContainer(Index, {
    initialVariables: {
        itemId: 12674533
    },
    fragments: {
        store() {
            return Relay.QL`
            fragment on HackerNewsAPI {
                item(id: $itemId) {
                    title
                }
            }
            `
        }
    }
})