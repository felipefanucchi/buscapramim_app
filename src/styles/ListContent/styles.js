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
		fontFamily: 'MontSerratSemiBold',
		marginBottom: 5
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
	},
	card: {
		padding: 20,
		flexDirection: 'row',
	},
	cardLabel: {
		color: '#444',
		fontFamily: 'MontSerratBold'
	},
	cardLabelAddress: {
		color: '#999999',
		marginTop: 5,
		marginBottom: 5,
		justifyContent: 'flex-end',
		fontFamily: 'MontSerratRegular'
	},
	cardLabelDistance: {
		color: '#EC2041',
		fontWeight: '700',
		fontSize: 17
	},
	cardAvatar: {
		backgroundColor: '#F0F0F0',
		borderRadius: 100,
		width: 50,
		height: 50,
		marginRight: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardInfo: {
		flex: 1
	},
	areaTitle: {
		paddingHorizontal: 20,
		color: '#bcbcbc',
		fontFamily: 'MontSerratBold',
		marginTop: 25,
	}
});