import fs from 'fs'
import colors from 'colors'

function getSeasonInfo($, selector) {
  return $(`.seasonal-anime ${selector}`).map(function () {
    return $(this).text().trim()
  }).get()
}

function getSeasonImage($) {
  return $(`.seasonal-anime .image img`).map(function () {
    return $(this).attr('data-src')
  }).get()
}


function getSeasonsGenres($) {
  return $('.seasonal-anime .genres-inner').map(function () {

    return $(this).find('.genre').map((i, el) => {
      return $(el).text().trim()
    }).get()
  }).get()
}

function formatEp(ep) {
  const [number] = ep.split(' ')
  const result = Number(number)

  if (!Number.isNaN(result)) {
    return Number(number)
  } else {
    return null
  }
}

function convertToJson(animes) {
  const dir = 'datas/season.json'
  const json = JSON.stringify(animes, null, 2)

  try {
    const file = fs.writeFileSync(dir, json, 'utf8')
    console.log(colors.green('Season generated with success! 👌'))
    return file
  } catch (error) {
    console.log(error)
  }
}

export { getSeasonInfo, getSeasonImage, getSeasonsGenres, formatEp, convertToJson }
