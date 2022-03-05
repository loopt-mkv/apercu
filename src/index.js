// @flow

import { render } from 'mobx-jsx'
import { html } from 'mobx-jsx/html'
import App from './containers/App.js'

render(() => html`<${App} />`, document.body)
