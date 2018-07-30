import searchRepositories from './searchRepositories'

const typeDef = `
  type Repository {
    id: ID
    owner: ID
    full_name: String
    description: String
    html_url: String
    language: String
    stargazers_count: Int
  }
`

const resolvers = {
  Query: {
    searchRepositories
  }
}

export default {
  typeDef,
  resolvers
}