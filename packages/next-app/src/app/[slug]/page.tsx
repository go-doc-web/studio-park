import { fetchContentPageData } from '../../services/getContentPageBySlug';
// TODO Поки страніца  у розробці 'force-dynamic' потім export const revalidate = (60 ???)
export const dynamic = 'force-dynamic';
// export const revalidate = 60;

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { loading, data, error } = await fetchContentPageData(slug);
  const title = data?.title;

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching data:', error);
    return <p>{error?.message || 'An error occurred.'}</p>;
  }
  if (!data) return <p>Page not found</p>;

  return <h1>{title}</h1>;
}
