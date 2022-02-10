import DB from '../../../EuroBuData/db'

const allOpinions = async (request, res) => {
  // La respuesta se visualiza en la consola
  // res.end(JSON.stringify({ hello: 'world' }))
  const db = new DB() // Helper functions to simulate a API request
  const allEntries = await db.getOpinions()
  const length = allEntries.length

  res.status(200).json({ opinions: allEntries, length })
}

export default allOpinions
