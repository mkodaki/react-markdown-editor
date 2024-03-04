import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { Editor } from './pages/editor'
import { History } from './pages/history'
import { useStateWithStorage } from './hooks/use_state_with_storage'

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`

const StorageKey = '/editor:text'

const Main: React.FC = () => {
    const [text, setText] = useStateWithStorage('', StorageKey)

    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/editor" element={<Editor text={text} setText={setText} />} />
                    <Route path="/history" element={<History setText={setText} />} />
                    <Route path="*" element={<Navigate replace to="/editor" />} />
                </Routes>
            </Router>
        </>
    )
}

render(<Main />, document.getElementById('app'))
