const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingRight: 26,
    paddingLeft: 17,
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
    position: 'relative',
  },
  messageNumberContainer: {
    width: 15,
    height: 15,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 5,
  },
  messageNumber: {
    fontSize: 8,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 7,
    color: '#FFFFFF',
    padding: 0,
    margin: 0,
  },
  storyContainer: {
    paddingHorizontal: 28,
    marginTop: 12,
    height: 100,
  },
  userPostContainer: {
    paddingHorizontal: 24,
  },
});

export default style;
