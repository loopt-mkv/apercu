// @flow

import type { LineElement } from '../types/LineElement.js'
import type { HTM } from '../unpkg.js'
import { html, css } from '../unpkg.js'
import View from '../components/View.js'
import Text from '../components/Text.js'
import noteStore from '../stores/NoteStore.js'

function renderLineElement(lineElement: LineElement) {
  console.log('lineElement.markdown', lineElement.markdown)
  return html`
    <${Text} className="line-element">
      ${lineElement.markdown}
    </Text>
  `
}

const Excerpt = (): HTM => {
  const { lineElements } = noteStore

  return html`
    <${View} className=${style}>
      ${lineElements.map(renderLineElement)}
    </View>
  `
}

const style = css`
  > .spaces {
    //user-select: none;
  }
`

// $FlowFixMe
export default Excerpt
