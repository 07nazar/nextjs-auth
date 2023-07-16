import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { NextPageContext } from 'next'

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => signOut()}>Sign out</button>
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx)
  console.log(session)

  return {
    props: {
      session,
    },
  }
}
