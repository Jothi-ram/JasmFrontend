import { StyleSheet, Dimensions } from 'react-native';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    height: HEIGHT / 4,
    marginTop: 5,
    // marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 0,
    
    //shadowColor: 'grey',
    elevation: 10,
    // shadowRadius: 5,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    borderColor: 'black',
    // borderBottomColor: 'black',
    // flexWrap: 'wrap',
    // alignContent: 'center',
    //   flexShrink: 'shrink',
    marginBottom: 5,
    overflow: 'hidden',
    width: WIDTH / 1.03,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
    // overflow: 'false',
  },
  textContainder: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // overflow: 'false',
    //backgroundColor: 'grey',
    height: 100,
    width: 200,
  },
  screen: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'white',
  },
});

export default styles;
