import 'dotenv/config'
import linebot from 'linebot'
import Carpenter from './carafiting/Carpenter.js'
import Blacksmith from './carafiting/Blacksmith.js'
import Armorer from './carafiting/Armorer.js'
import Goldsmith from './carafiting/Goldsmith.js'
import Leatherworker from './carafiting/Leatherworker.js'
import Weaver from './carafiting/Weaver.js'
import Alchemist from './carafiting/Alchemist.js'
import Culinarian from './carafiting/Culinarian.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動。')
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!crp ')) {
      Carpenter(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!bsm ')) {
      Blacksmith(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!arm ')) {
      Armorer(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!gsm ')) {
      Goldsmith(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!lwr ')) {
      Leatherworker(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!wvr ')) {
      Weaver(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!alc ')) {
      Alchemist(event)
    }
  }

  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!cul ')) {
      Culinarian(event)
    }
  }

})
