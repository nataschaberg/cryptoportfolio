import 'react-native'
import React from 'react'
import { render, waitForElement, cleanup } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'

import axios from 'axios'
import MockAdapater from 'axios-mock-adapter'
import { Overview } from '../../src/Overview'

import {
  mockProductIds,
  testBASE_URL,
  testID_URL,
  mockProductStats,
} from '../mock.data'

const mock = new MockAdapater(axios)

describe('Overview Component', () => {
  afterAll(() => {
    mock.restore()
  })

  it('Should render correctly on opening', () => {
    mock.onGet(testBASE_URL).reply(200, mockProductIds)
    mock.onGet(testID_URL).reply(200, mockProductStats)

    const { getByTestId } = render(<Overview />)
    expect(getByTestId('initialLoading')).toBeTruthy
  })

  it('Should show error on api network failure', async () => {
    mock.onGet(testBASE_URL).networkError()

    const { getByText } = render(<Overview />)
    await waitForElement(() =>
      getByText('Ooops, something went wrong. Please retry.')
    )
  })

  it('Should render product details after data is fetched successfully', async () => {
    mock.onGet(testBASE_URL).reply(200, mockProductIds)
    mock.onGet(testID_URL).reply(200, mockProductStats)

    const { getByText } = render(<Overview />)

    await waitForElement(() => [
      getByText('Product: NBRG'),
      getByText('Volume 30 Day: 888999'),
    ])
  })
})
