import { Font } from 'expo';

const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font));


export const fontAssets = cachedFonts([
  {
    'proxima-nova': require('../assets/fonts/Proxima-Nova-Regular.ttf')
  
  },
  {
    'proxima-nova-bold': require('../assets/fonts/Proxima-Nova-Bold.otf')
  },
  {
    'proxima-nova-semibold': require('../assets/fonts/Proxima-Nova-Semibold.ttf')
  },
  {
    'jenthill': require('../assets/fonts/Jenthill.ttf')
  },
  {
    'Roboto_medium': require('../assets/fonts/Roboto_medium.ttf')
  },
  {
    'Roboto': require('../assets/fonts/Roboto.ttf')
  }
  
]);
