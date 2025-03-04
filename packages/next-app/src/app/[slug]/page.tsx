import { fetchContentPageData } from '../../services/getContentPageBySlug';
import PageBuilder from '@/componets/page-builder';
// TODO Поки страніца  у розробці 'force-dynamic' потім export const revalidate = (60 ???)
export const dynamic = 'force-dynamic';
// export const revalidate = 60;

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const { data, error } = await fetchContentPageData(slug);

  if (error) {
    console.error('Error fetching data:', error);
    return <p>{error?.message || 'An error occurred.'}</p>;
  }
  if (!data) return <p>Page not found</p>;

  return (
    <>
      <PageBuilder sections={data?.sections ?? null} />
    </>
  );
}
