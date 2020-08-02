import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
	input: {
		flex: 1,
		height: 36,
		borderBottomColor: '#EC2041',
		borderBottomWidth: 1,
		marginHorizontal: 20,
	},
	textArea: {
		justifyContent: 'flex-start',
		borderBottomColor: '#EC2041',
		borderBottomWidth: 1,
		marginHorizontal: 20,
	},

	actionWrapper: {
		paddingHorizontal: 30,
		marginTop: 30,
		marginBottom: 30
	},

  action: {
    backgroundColor: '#E82041',
    borderRadius: 8,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
		flexDirection: 'row',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5
  }
});
