import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let counter = 1;

let schema = new GraphQLSchema ({
  query: new GraphQLObjectType({
    name: 'myQuery',
    fields: () => ({
      counter: { // http://localhost:9005/graphql?query={counter}
        type: GraphQLInt,
        resolve: () => counter
      },
      people: {
        type: GraphQLString,
        resolve: () => "hi from here ;)"
      }
    }),

    mutation: new GraphQLObjectType({
      name: 'myMutation',
      fields: () => ({
        incrementCounter: {
          type: GraphQLInt,
          resolve: () => ++counter
        }
      })
    })
  })
});

export default schema;
