import fs from 'fs'
import path from 'path'
import colors from 'colors'
import { format } from 'date-fns'

function getSeason($) {
  const [season, year] = $('.navi-seasonal li a.on').text().trim().split(' ')
  return { season, year }
}

function getSeasonInfo($, selector) {
  return $(`.seasonal-anime ${selector}`).map(function () {
    return $(this).text().trim()
  }).get()
}

function getSeasonImage($) {
  return $(`.seasonal-anime .image img`).map(function () {
    return $(this).attr('src') || $(this).attr('data-src')
  }).get()
}


function getSeasonsGenres($) {
  const list = []
  $('.seasonal-anime .genres-inner').each(function (i) {

    const genres = $(this).find('.genre').map((j, el) => {
      return $(el).text().trim()
    }).get()

    list[i] = genres
  })

  return list
}

function getCategory($) {
  return $('.seasonal-anime').map(function () {
    return $(this.parent).find('.anime-header').text().trim()
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
  // eslint-disable-next-line no-undef
  const dir = path.resolve(__dirname, '../../web/datas/season.json')
  const json = JSON.stringify(animes, null, 2)

  try {
    const file = fs.writeFileSync(dir, json, 'utf8')
    console.log(colors.green('Season generated with success! 👌'))
    return file
  } catch (error) {
    console.log(error)
  }
}

function getDateNow() {
  return format(new Date(), 'yyyy-MM-dd')
}

export { getSeason, getSeasonInfo, getSeasonImage, getSeasonsGenres, getCategory, formatEp, convertToJson, getDateNow }
