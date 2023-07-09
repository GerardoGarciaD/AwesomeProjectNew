const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 3,
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    marginVertical: 16,
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  post: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    columnGap: 27,
    paddingHorizontal: 5,
  },
  userPostStatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  userPostStatText: {
    color: '#79869F',
  },
});

export default style;
