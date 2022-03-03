// @flow

import type { HTM } from '../unpkg.js'
import { React, html, css, mobxReact } from '../unpkg.js'
import View from '../components/View.js'
import themes from '../themes.js'
import Header from './Header.js'
import { NoteStore } from '../stores/NoteStore.js'
import Excerpt from './Excerpt.js'

const theme = themes[3]

const { Provider } = mobxReact
const stores = {
  noteStore: NoteStore,
}

// Define global styles here
css`
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: ${theme.backgroundColor};
    color: ${theme.titleColor};
    font-family: 'Roboto Mono', monospace;
  }
`

const componentStyle = css`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  > .content {
    margin-left: auto;
    margin-right: auto;
    //width: 800px;
    flex: 1;
  }
`

const App = (): HTM => {
  return html`
    <${Provider} ...${stores}>
      <${View} className=${componentStyle}>
        <${View} className="content">
          <${Header} />
          <${Excerpt}/>
        </View>
      </View>
    </Provider>
  `
}

export default App
