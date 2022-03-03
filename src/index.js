// @flow

import { React, ReactDOM, html } from './unpkg.js'
import App from './containers/App.js'

ReactDOM.render(html` <${App} />`, document.body)

// const Route = {
//   '/': React.lazy(() => import('./routes/home/versions.js')),
//   '*': React.lazy(() => import('./routes/lost/versions.js')),
// }
// ReactDOM.render(
//   html`
//     <${React.Suspense} fallback=${html`<div></div>`}>
//       <${Route[location.pathname] || Route['*']} />
//     <//>
//   `,
//   document.body
// )
