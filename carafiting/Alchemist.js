import axios from 'axios'
import Cheerio from 'cheerio'
import https from 'https'
import flexcraft from '../template/flexcraft.js'

export default async (event) => {
  const search = event.message.text.replace('!alc ', '')

  try {
    let hasError = false
    let page = 1
    while (!hasError) {
      const { data } = await axios.get(`https://ff14restanet.com/search?craft=00000010&type=${page}`, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      const $ = Cheerio.load(data)
      const alchemist = []
      $('.search-list li').each((index, element) => {
        if ($(element).find('p a').text().trim().replace(/\n\t/g, '') === search) {
          alchemist.push(`
          ${$(element).find('p a').text().trim().replace(/\n\t/g, '')}
            ${$(element).find('p a').eq(0).attr('href')}
            ${$(element).find('img').attr('data-src')}
          `)

          flexcraft.contents.hero.url = $(element).find('img').attr('data-src')
          flexcraft.contents.body.contents[1].contents[0].text = $(element).find('p a').text().trim().replace(/\n\t/g, '')
          flexcraft.contents.body.contents[3].contents[0].action.uri = $(element).find('p a').eq(0).attr('href')

          event.reply(flexcraft)
          console.log(flexcraft)
        }
      })
      if (page === 57) {
        console.log('end')
        hasError = true
        break
      }
      page++
    }
  } catch (error) {
    console.log(error)
  }
  event.reply('查無此物品')
}
