
import Link from "next/link";
import FormPost from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: {
    id: number, title: string
  }[] = await getPosts()

  return (
    <main className="py-8 px-48">
      <FormPost />
      <Link
        className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md"
        href={ "/dashboard" }>
        Go to the dashboard
      </Link>
      { data.map((post) => (
        <h1 key={ post.id } className="text-lg py-6">{ post.title }</h1>
      )) }
    </main>
  )
}