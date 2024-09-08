export function figmaMessenger(pluginMessage: unknown ) {
  parent.postMessage(
    { pluginMessage },
    'https://www.figma.com'
  )
}

export default figmaMessenger;
