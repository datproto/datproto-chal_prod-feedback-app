'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import store from '@/store'

export default function Providers({ children }: PropsWithChildren) {
  const [render, setRender] = useState(false)

  useEffect(() => setRender(true), [])

  return render ? (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  ) : null
}
