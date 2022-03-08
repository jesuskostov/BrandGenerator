let Jimp = require('jimp')

let image = new Jimp(500, 500, 'black', (err, image) => {
  if (err) throw err
})

Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
  .then(font => {
    let message = 'NEW'
    let letter = Array.from(message)
    var w = 0
    var h = 0
    letter.map(i => {
        w += font.chars[i].width
        h = font.chars[i].height
    })
    console.log(w);
    let x = (485 - w) / 2
    let y = (485 - h) / 2
    image.print(font, x, y, message)
    return image
  }).then(image => {
    let file = `new_name.${image.getExtension()}`
    return image.write(file) // save
  })