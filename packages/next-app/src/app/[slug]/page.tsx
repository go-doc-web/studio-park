import { fetchContentPageData } from '../../services/getContentPageBySlug';
import PageBuilder from '@/componets/page-builder';
import { ContentPageSectionsDynamicZone } from '@/generated/graphql';
// TODO Поки страніца  у розробці 'force-dynamic' потім export const revalidate = (60 ???)
export const dynamic = 'force-dynamic';
// export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const { data, error } = await fetchContentPageData(slug);
  const cleanedSections =
    data?.sections?.map((section) =>
      section === null ? undefined : section
    ) ?? [];

  if (error) {
    console.error('Error fetching data:', error);
    return <p>{error?.message || 'An error occurred.'}</p>;
  }
  if (!data) return <p>Page not found</p>;

  return (
    <>
      <PageBuilder
        sections={cleanedSections as ContentPageSectionsDynamicZone[]}
      />
    </>
  );
}
