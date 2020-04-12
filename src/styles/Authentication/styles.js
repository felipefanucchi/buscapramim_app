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
		fontWeight: '100',
		fontSize: 30,
		color: '#E02041'
	},
	buttonText: {
		margin: 0,
		padding: 0,
		color: '#444',
		marginTop: 20
	},
	panel: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 8,
		flexDirection: 'column',
		width: '300px',
		marginTop: 20,
	},
	buttonPrimary: {
		flex: 1,
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginBottom: 15
	}
});
