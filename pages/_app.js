import React from 'react'
import '../styles/globals.css'
import {StateProvider} from "../src/Components/StateProvider";
import reducer, {initialState} from "../src/Components/reducers";

function MyApp({ Component, pageProps }) {
  return (
      <StateProvider reducer={reducer} initialState={initialState}>
        <Component {...pageProps} />
      </StateProvider>
  )
}

export default MyApp
