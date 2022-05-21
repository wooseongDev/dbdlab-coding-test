import { NextApiHandler } from 'next'

import covid19InfStateJSON from './data/covid19-inf-state.json'

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(covid19InfStateJSON)
}

export default handler
