import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	background: {
		backgroundColor: '#efefef',
		flex: 1 
	},
	header: {
		backgroundColor: '#EC2041',
		padding: 20,
		height: 200
	},
	headerTitle: {
		color: '#FFF',
		fontSize: 20,
		fontFamily: 'MontSerratSemiBold'
	},
	headerSubtitle: {
		color: '#FFF',
		fontSize: 15,
		fontFamily: 'MontSerratRegular'
	},
	content: {
		margin: 20,
		borderRadius: 15,
		flex: 1,
		backgroundColor: '#fff',
		marginTop: -100,
		shadowOffset:{  width: 10,  height: 10,  },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 3
	}
});