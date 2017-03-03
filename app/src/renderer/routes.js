export default [
  // {
  //   path: '/',
  //   name: 'landing-page',
  //   component: require('components/LandingPageView')
  // },
  {
    path: '/',
    name: 'Music Player',
    component: require('components/MusicView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
