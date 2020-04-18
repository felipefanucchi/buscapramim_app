import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeText: { 
		fontSize: 16,
		marginBottom: 30, 
		color: '#444',
		padding: 20
	},
	card: {
		// backgroundColor: '#f0f0f0',
		// borderRadius: 12,
		// marginBottom: 15,
		// height: 100,
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
		// elevation: 5,
		// paddingBottom: 15,
		// paddingHorizontal: 20
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
