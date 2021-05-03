import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { VerticalMenu } from '../components/VerticalMenu'


function MyApp({ Component, pageProps }) {
   return (
  //   <ChallengesProvider>
      <>
        <VerticalMenu />
        <Component {...pageProps} />
      </>
    // </ChallengesProvider>
  )
}

export default MyApp
