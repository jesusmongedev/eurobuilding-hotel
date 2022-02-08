import { setDayOfYear } from 'date-fns'
import { useEffect, useState } from 'react'

const Opiniones = () => {
  const [opinions, setOpinions] = useState([])
  useEffect(() => {
    window
      .fetch('/api/opinions')
      .then((res) => res.json())
      .then(({ opinions }) => {
        console.log(opinions)
        setOpinions(opinions)
      })
  }, [])
  return (
    <div>
      <p>Opiniones</p>
      {opinions?.map((opinion, i) => (
        <p key={i}>{opinion.name}</p>
      ))}
    </div>
  )
}

export default Opiniones
