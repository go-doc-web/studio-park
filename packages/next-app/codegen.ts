import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:1337/graphql', // Адрес Strapi GraphQL API

  documents: ['src/query/**/*.graphql'], // Пути к GraphQL-запросам и фрагментам

  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript', // Генерация TypeScript-типов

        'typescript-operations', // Операции (Query/Mutation)

        'typescript-react-apollo', // Хуки для Apollo Client
      ],

      config: {
        withHooks: true, // Генерация useQuery и useMutation

        withComponent: false,

        withHOC: false,
      },
    },

    'src/query/fragments/index.ts': {
      plugins: ['add'],

      config: {
        content: "export * from '../../generated/graphql';",
      },
    },

    'src/query/queries/index.ts': {
      plugins: ['add'],

      config: {
        content: "export * from '../../generated/graphql';",
      },
    },
  },
};

export default config;
