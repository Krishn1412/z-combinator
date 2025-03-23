import Image from "next/image";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  const post = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1},
      _id: 1,
      description: "This is a description",
      image:"https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Robots",
      title: "We Robots",
    }
  ]

  return (
      <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup <br/> Connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on pitches and Get noticed
        </p>
        <SearchForm query={query}/>
      </section>
     <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"`: 'All startups'}
      </p>
       <ul className="mt-7 card_grid">
        {post?.length > 0 ? (
          post.map((StartupCardType, number) => (
            <StartupCard/>
          ))
        )}

       </ul>
     </section>
      </>
  );
}
