import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { db } from '../firebase'

export default function Home({ session, posts }) {
  if(!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden ">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed posts={posts}/>
        {/* widgets section */}
        <Widgets />
      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  // get the user
  const session= await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp","desc").get();
  const docs = posts.docs.map(post=>({
    id : post.id,
    ...post.data(),
    timestamp: null
  }));

  // posts and session being prefetched in server before it reaches the browser and passed on as a prop
  return {
    props: {
      session,
      posts : docs,
    }
  }
}