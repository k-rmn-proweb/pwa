const fs = require('fs');
const path = require('node:path');
const Jimp = require('jimp');

const PATH = {
  SOURCE: './generateIcons/logo.png',
  OUTPUT_DIR: './public/icon/',
};

const config = [
  {
    src: path.join(PATH.OUTPUT_DIR, '16x16.png'),
    width: 16,
    height: 16,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '20x20.png'),
    width: 20,
    height: 20,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '24x24.png'),
    width: 24,
    height: 24,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '29x29.png'),
    width: 29,
    height: 29,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '30x30.png'),
    width: 30,
    height: 30,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '32x32.png'),
    width: 32,
    height: 32,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '36x36.png'),
    width: 36,
    height: 36,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '40x40.png'),
    width: 40,
    height: 40,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '44x44.png'),
    width: 44,
    height: 44,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '48x48.png'),
    width: 48,
    height: 48,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '50x50.png'),
    width: 50,
    height: 50,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '55x55.png'),
    width: 55,
    height: 55,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '57x57.png'),
    width: 57,
    height: 57,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '58x58.png'),
    width: 58,
    height: 58,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '60x60.png'),
    width: 60,
    height: 60,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '63x63.png'),
    width: 63,
    height: 63,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '64x64.png'),
    width: 64,
    height: 64,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '66x66.png'),
    width: 66,
    height: 66,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '71x71.png'),
    width: 71,
    height: 71,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '72x72.png'),
    width: 72,
    height: 72,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '75x75.png'),
    width: 75,
    height: 75,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '76x76.png'),
    width: 76,
    height: 76,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '80x80.png'),
    width: 80,
    height: 80,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '87x87.png'),
    width: 87,
    height: 87,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '88x88.png'),
    width: 88,
    height: 88,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '89x89.png'),
    width: 89,
    height: 89,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '96x96.png'),
    width: 96,
    height: 96,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '100x100.png'),
    width: 100,
    height: 100,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '107x107.png'),
    width: 107,
    height: 107,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '114x114.png'),
    width: 114,
    height: 114,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '120x120.png'),
    width: 120,
    height: 120,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '128x128.png'),
    width: 128,
    height: 128,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '142x142.png'),
    width: 142,
    height: 142,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '144x144.png'),
    width: 144,
    height: 144,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '150x150.png'),
    width: 150,
    height: 150,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '152x152.png'),
    width: 152,
    height: 152,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '167x167.png'),
    width: 167,
    height: 167,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '176x176.png'),
    width: 176,
    height: 176,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '180x180.png'),
    width: 180,
    height: 180,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '188x188.png'),
    width: 188,
    height: 188,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '192x192.png'),
    width: 192,
    height: 192,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '200x200.png'),
    width: 200,
    height: 200,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '225x225.png'),
    width: 225,
    height: 225,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '256x256.png'),
    width: 256,
    height: 256,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '284x284.png'),
    width: 284,
    height: 284,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '300x300.png'),
    width: 300,
    height: 300,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '310x150.png'),
    width: 310,
    height: 150,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '310x310.png'),
    width: 310,
    height: 310,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '388x188.png'),
    width: 388,
    height: 188,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '388x388.png'),
    width: 388,
    height: 388,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '465x225.png'),
    width: 465,
    height: 225,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '465x465.png'),
    width: 465,
    height: 465,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '512x512.png'),
    width: 512,
    height: 512,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '600x600.png'),
    width: 600,
    height: 600,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '620x300.png'),
    width: 620,
    height: 300,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '620x620.png'),
    width: 620,
    height: 620,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '775x375.png'),
    width: 775,
    height: 375,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '930x450.png'),
    width: 930,
    height: 450,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '1024x1024.png'),
    width: 1024,
    height: 1024,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '1240x600.png'),
    width: 1240,
    height: 600,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '1240x1240.png'),
    width: 1240,
    height: 1240,
  },
  {
    src: path.join(PATH.OUTPUT_DIR, '2480x1200.png'),
    width: 2480,
    height: 1200,
  },
];

(async () => {
  const source = fs.readFileSync(PATH.SOURCE);
  for (let i = 0; i < config.length; i++) {
    const image = await Jimp.read(source);
    image.contain(config[i].width, config[i].height);
    await image.writeAsync(config[i].src);
    console.log(config[i].src);
  }
})();
