import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
	background: {
		backgroundColor: '#efefef',
		flex: 1 
	},
	header: {
		backgroundColor: '#EC2041',
		paddingTop: (Platform.OS === 'ios') ? 30 : 20,
		paddingHorizontal: 10,
		height: 200,
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
		margin: 10,
		borderRadius: 15,
		flex: 1,
		backgroundColor: '#fff',
		marginTop: -85,
		shadowOffset:{ width: 2, height: 2, },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 2
	},
	card: {
		padding: 15,
	},
	cardLabel: {
		color: '#444',
		fontFamily: 'MontSerratBold'
	},
	cardLabelLogout: {
		color: '#EC2041',
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
		width: 45,
		height: 45,
		marginRight: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardInfo: {
		flex: 1
	},
	cardArrow: {
		marginLeft: 15
	},
	areaTitle: {
		paddingHorizontal: 20,
		color: '#bcbcbc',
		fontFamily: 'MontSerratBold',
		marginTop: 25,
	}
});