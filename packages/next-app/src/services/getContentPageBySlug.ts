import { ApolloError } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';
import GET_CONTENT_PAGES_BY_SLUG from '../query/queries/getContentPageBySlug.graphql';
import type { Get_Content_Pages_By_SlugQuery } from '../generated/graphql';

interface FetchContentPageDataResult {
  data: Get_Content_Pages_By_SlugQuery['contentPages'][0] | null;
  loading: boolean;
  error: ApolloError | Error | null;
}

export async function fetchContentPageData(
  slug: string
): Promise<FetchContentPageDataResult> {
  try {
    const { loading, data } =
      await apolloClient.query<Get_Content_Pages_By_SlugQuery>({
        query: GET_CONTENT_PAGES_BY_SLUG,
        variables: { slug },
      });

    //TODO сделать проверку
    // if (!data.contentPages && data.contentPages.length === 0) {
    //   console.error('GraphQL errors:', data.contentPages);
    //   return {
    //     data: null,
    //     loading: false,
    //     error: null,
    //   };
    // }

    return {
      data: data.contentPages[0],
      loading,
      error: null,
    };
  } catch (error) {
    return { data: null, loading: false, error: error as ApolloError | Error };
  }
}
