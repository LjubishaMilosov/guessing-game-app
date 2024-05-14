import Link from "next/link"

export default function Home() {

  const players = [
    {
      name: "Ljubisha",
      points: 0
    },
    {
      name: "Jenny",
      points: 0
    }
  ]

  return(
    <div>
    <h1>Guessing Game</h1>
    <p> Waiting for players. Currently joined: </p>
    {
      players.map((player) => {
        return (
          <p>{player.points}</p>
        )
      })
    }
    <h2> Join</h2>
    <p>Navigate to <Link href="/join">/Join</Link> on your phone to join the game!</p>
    </div>

  )
}
