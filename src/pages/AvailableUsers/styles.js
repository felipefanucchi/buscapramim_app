import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
		
	actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#E82041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5
  }
});
