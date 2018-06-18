import React from 'react'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'

class App extends React.Component {
  render = () => (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App
