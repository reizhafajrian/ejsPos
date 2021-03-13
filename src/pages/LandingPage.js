import React from 'react'
import Content from '../component/content'
import Header from '../component/header'

export default function LandingPage(props) {
    return (
        <>
          <Header {...props} />
          <Content/>
        </>
    )
}
