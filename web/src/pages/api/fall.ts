import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function fall(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dir = path.resolve('datas/fall.json')

    const seasonFile = fs.readFileSync(dir, 'utf8')
    const seasonDatas = JSON.parse(seasonFile)

    res.status(200).json(seasonDatas)
  } catch (error) {
    res.status(500).send(error)
  }
}
