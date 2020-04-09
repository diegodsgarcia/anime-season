const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  try {
    // eslint-disable-next-line no-undef
    const dir = path.resolve(__dirname, '../datas/fall.json')
    const seasonFile = fs.readFileSync(dir)
    const seasonDatas = JSON.parse(seasonFile)

    res.send(seasonDatas)
  } catch (error) {
    console.log(error)
  }
}
