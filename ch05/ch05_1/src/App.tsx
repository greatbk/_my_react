import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

export default function App() {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <main>
        <ReduxClock />
        <UseReducerClock />
      </main>
    </ReduxProvider>
  )
}
