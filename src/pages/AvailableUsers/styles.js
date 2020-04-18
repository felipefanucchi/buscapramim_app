import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
    paddingTop: Constants.statusBarHeight + 20,
		flex: 1,
		paddingHorizontal: 25
	},
	card: {
		// backgroundColor: '#f0f0f0',
		// borderRadius: 12,
		// padding: 10,
		// marginBottom: 15,
		// shadowColor: "#000",
		// height: 100,
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
		// elevation: 5,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		paddingBottom: 15
	},
	cardLabel: {
		fontWeight: '700',
		color: '#444',
	},
	cardValue: {
		fontWeight: '100'
	},
	cardLabelAddress: {
		fontWeight: '700',
		color: '#444',
		flex: 1,
		justifyContent: 'flex-end'
	}
});
