import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default function spring(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dir = path.resolve(
      serverRuntimeConfig.PROJECT_ROOT,
      './datas/spring.json'
    )

    const seasonFile = fs.readFileSync(dir, 'utf8')
    const seasonDatas = JSON.parse(seasonFile)

    res.status(200).json(seasonDatas)
  } catch (error) {
    res.status(500).send(error)
  }
}
