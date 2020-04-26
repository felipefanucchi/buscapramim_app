import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
	backgroundCover: {
    paddingTop: Constants.statusBarHeight + 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		fontFamily: 'MontSerratLight',
		fontSize: 30,
		color: '#E02041'
	},
	buttonText: {
		margin: 0,
		padding: 0,
		color: '#444',
		marginTop: 20,
		fontFamily: 'MontSerratRegular'
	},
	panel: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 8,
		flexDirection: 'column',
		width: 300,
		marginTop: 20,
	},
	buttonPrimary: {
		justifyContent: 'center',
		borderRadius: 3,
		backgroundColor: '#EC2041',
	},
	buttonPrimaryText: {
		fontFamily: 'MontSerratBold',
		color: 'white',
		textAlign: 'center',
		lineHeight: 32,
		textTransform: 'uppercase'
	},
	input: {
		height: 40,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginBottom: 15,
		fontFamily: 'MontSerratItalic'
	}
});
