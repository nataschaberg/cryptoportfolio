/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../../App'

// Note: test renderer must be required after react-native.
import * as ShallowRenderer from 'react-test-renderer/shallow'

describe('App Component', () => {
  it('Should render correclty', () => {
    const shallow = ShallowRenderer.createRenderer()
    const app = shallow.render(<App />)
    expect(app).toMatchSnapshot()
  })
})
