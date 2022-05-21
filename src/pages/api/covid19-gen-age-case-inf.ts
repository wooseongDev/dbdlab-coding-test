import { NextApiHandler } from 'next'

import covid19GenAgeCaseInfJSON from './data/covid19-gen-age-case-inf.json'

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(covid19GenAgeCaseInfJSON)
}

export default handler
