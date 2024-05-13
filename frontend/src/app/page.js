import Link from "next/link"

export default function Home() {
  return(
    <div>
    <h1>Guessing Game</h1>
    <p> Waiting for players. Currently joined: </p>
    <h2> Join</h2>
    <p>Navigate to <Link href="/join">/Join</Link> on your phone to join the game!</p>
    </div>

  )
}
