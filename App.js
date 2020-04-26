import React from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

function App() {

	let [fontsLoaded] = useFonts({
		'MontSerratBlack': require('./assets/fonts/Montserrat-Black.ttf'),
		'MontSerratBlackItalic': require('./assets/fonts/Montserrat-BlackItalic.ttf'),

		'MontSerratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
		'MontSerratBoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),

		'MontSerratExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
		'MontSerratExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),

		'MontSerratExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
		'MontSerratExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),

		'MontSerratLight': require('./assets/fonts/Montserrat-Light.ttf'),
		'MontSerratLightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),

		'MontSerratMedium': require('./assets/fonts/Montserrat-Medium.ttf'),
		'MontSerratMediumItalic': require('./assets/fonts/Montserrat-MediumItalic.ttf'),

		'MontSerratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
		'MontSerratItalic': require('./assets/fonts/Montserrat-Italic.ttf'),

		'MontSerratSemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
		'MontSerratSemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),

		'MontSerratThin': require('./assets/fonts/Montserrat-Thin.ttf'),
		'MontSerratThinItalic': require('./assets/fonts/Montserrat-ThinItalic.ttf'),
	});

	if (!fontsLoaded) return <AppLoading />;

  return (<Routes />);
}

export default App;
