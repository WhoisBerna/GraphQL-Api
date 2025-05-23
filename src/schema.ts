export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        plataform: [String!]!
    }

    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
    }

    type Author {
        id: ID!,
        name: String!,
        verified: Boolean,
    }

    type Query {
        games: [Game],
        review: [Review],
        authors: [Author],
    }
`