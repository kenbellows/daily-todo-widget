import { StyleSheet } from 'react-native'

const THEME_COLOR = 'rebeccapurple'

export default StyleSheet.create({
  fullScreen: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  container: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column'
  },
  innerContainer: {
    paddingVertical: 50,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  viewHeading: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: THEME_COLOR,
    color: 'white'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  footerButton: {
    width: '100%',
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
    color: '#fff'
  }
})
