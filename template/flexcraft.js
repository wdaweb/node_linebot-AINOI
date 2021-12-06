export default {
  type: 'flex',
  altText: 'Search done.',
  contents: {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://ff14restanet.com/img/item/40/08a251b764121abe67d3ecb7d9d9754863bacd56.png',
      size: 'full',
      aspectRatio: '20:17',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'http://linecorp.com/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'Item :',
              size: 'lg',
              color: '#6C6C6C'
            }
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'グリモア',
              size: 'xl'
            }
          ],
          margin: 'sm'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'Recipe :',
              size: 'lg',
              color: '#6C6C6C'
            }
          ],
          margin: 'lg'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'To Get Recipe of This Item',
              action: {
                type: 'uri',
                label: 'To Get Recipe',
                uri: 'https://ff14restanet.com/craft?m=a2abfbc4586'
              },
              size: 'lg',
              color: '#66B3FF'
            }
          ],
          margin: 'sm'
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'All Recipe for English ver. :',
          size: 'md',
          color: '#6C6C6C'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'Eorzea Database',
                uri: 'https://na.finalfantasyxiv.com/lodestone/playguide/db/recipe/'
              },
              color: '#ffffff'
            }
          ],
          backgroundColor: '#743A3A',
          borderWidth: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          cornerRadius: 'md'
        },
        {
          type: 'text',
          text: 'All Recipe for Japanese ver.',
          margin: 'xl',
          color: '#6C6C6C'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'FF14 Restanet',
                uri: 'https://ff14restanet.com/'
              },
              color: '#ffffff'
            }
          ],
          backgroundColor: '#5A5AAD',
          justifyContent: 'center',
          alignItems: 'center',
          cornerRadius: 'md'
        }
      ]
    }
  }
}
