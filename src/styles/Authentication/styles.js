import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	backgroundCover: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		fontWeight: 'lighter',
		fontSize: '30px',
		color: '#E02041'
	},
	buttonText: {
		flex: '0 0 50%',
		margin: 0,
		padding: 0,
		color: '#444',
		marginTop: 20
	},
	panel: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: '8px',
		flexDirection: 'column',
		width: '300px',
		marginTop: 20,
		boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
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
