import { ArticleApi } from '../api/article-api';

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();
  return (
    <>
      <h1 className='font-bold capitalize text-3xl'> Welcome to CLOS-IT </h1>
      <div>A new app that works with Pinterest.</div>
      {JSON.stringify(articles)}
    </>
  );
}
