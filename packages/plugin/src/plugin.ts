const WIDTH = 1280;
const HEIGHT = 900;

figma.loadAllPagesAsync();

figma.showUI(__html__, {
  width: WIDTH,
  height: HEIGHT
});

figma.ui.onmessage = (message) => {
  if (message?.type === 'INTERNAL_SIZE') {
    const { type: _type, ...other } = message;
    console.log('INTERNAL_SIZE - object: ', other)
  }
}
