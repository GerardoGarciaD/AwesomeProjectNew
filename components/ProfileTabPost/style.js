const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  profileTabPostContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 21,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 10,
    marginBottom: 20,
  },
  image: {
    maxWidth: 150,
    maxHeight: 100,
  },
});
export default style;
