const squiggle = {
  textDecoration: `underline`,
  textDecorationColor: theme => `${theme.colors.primary}`,
  textDecorationStyle: `wavy`,
  textUnderlinePosition: `under`,
  color: `text`,
}
export default {
  title: squiggle,
  link: {
    ...squiggle,
    '&:hover': {
      color: `primary`
    }
  }
}