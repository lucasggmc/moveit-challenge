import { useRouter } from 'next/router'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { VerticalMenu } from '../components/VerticalMenu'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  const route = useRouter();
  const pathname = '/login'

   return (
  //   <ChallengesProvider>
      <>
      {
        route.pathname != pathname ? 
        (
        <VerticalMenu />
        )
        :
        (
          <div />
        )
      }
        <Component {...pageProps} />
      </>
    // </ChallengesProvider>
  )
}

export default MyApp
