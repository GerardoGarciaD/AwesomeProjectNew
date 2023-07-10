const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: 120,
    padding: 3,
  },

  profileImage: {
    width: 120,
    height: 120,
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileStatsContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  singleStatContainer: {
    alignItems: 'center',
    rowGap: 8,
    paddingHorizontal: 24,
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#022150',
  },
  singleStatText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: '#EFF2F6',
    marginVertical: 16,
    marginHorizontal: 28,
  },
});

export default style;
