const babelRelayPlugin   = require('babel-relay-plugin');
// const { introspectionQuery } = require("graphql/utilities")
const introspectionQuery = `query IntrospectionQuery {
    __schema {
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
            ...FullType
        }
        directives {
            name
            description
            args {
                ...InputValue
            }
            onOperation
            onFragment
            onField
        }
    }
}
fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
        name
        description
        args {
            ...InputValue
        }
        type {
            ...TypeRef
        }
        isDeprecated
        deprecationReason
    }
    inputFields {
        ...InputValue
    }
    interfaces {
        ...TypeRef
    }
    enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
    }
    possibleTypes {
        ...TypeRef
    }
}
fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
}
fragment TypeRef on __Type {
    kind
    name
    ofType {
        kind
        name
        ofType {
            kind
            name
            ofType {
                kind
                name
            }
        }
    }
}
`;
const request = require("sync-request")
const SERVER_URL = "https://www.graphqlhub.com/graphql"

const response = request("GET", SERVER_URL, {
    qs: {
        query: introspectionQuery
    },
})
const schema = JSON.parse(response.getBody('utf-8'))

module.exports = babelRelayPlugin(schema.data, {
    abortOnError: true
})