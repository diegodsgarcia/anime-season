const express = require('express')
const app = express()
const cheerio = require('cheerio')
const axios = require('axios')

const BASE_URL = 'https://myanimelist.net/anime/season'


request()

async function request() {
  const { data } = await axios(BASE_URL)
  const $ = cheerio.load(data)

  const titles = getSeasonsTitles($)
}


function getSeasonsTitles($) {
  const titles = []
  $('.seasonal-anime .title-text').each(function () {
    titles.push($(this).text().trim())
  })

  return titles
}
