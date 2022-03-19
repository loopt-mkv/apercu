// @flow

import css from 'csz'
import { nonr } from './nonr/nonr.js'
import { html } from './nonr/html.js'
import View from './components/View.js'

import Text from './components/Text.js'
import DoublePane from './components/DoublePane.js'
import { lineElements, store } from './stores/NoteStore.js'

// const styles = css`
//   display: flex;
//   flex-direction: column;
//
//   background-color: red;
// `
//
// const App = () => html`
//   <${View} className=${styles}>
//     <${DoublePane}
//       left=""
//       right=""
//     />
//   </View>
// `
//
// document.body?.appendChild(App())

// debugger
nonr(() => {
  console.log('lineElements()', lineElements())
})

setTimeout(() => {
  store.chapter = 2
}, 5000)
