import Relay from 'react-relay'

export default {
    store() {
        return Relay.QL`query {
            hn
        }`
    }
}