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
		borderBottomColor: '#999999',
		borderBottomWidth: 1,
		paddingBottom: 10,
		paddingHorizontal: 20,
		paddingTop: 10,
		flexDirection: 'row',
		// flex: 1
	},
	cardLabel: {
		fontWeight: '700',
		color: '#444',
	},
	cardLabelAddress: {
		color: '#999999',
		marginTop: 5,
		marginBottom: 5,
		justifyContent: 'flex-end'
	},
	cardLabelDistance: {
		color: '#EC2041',
		fontWeight: '700',
		fontSize: 17
	}
});
