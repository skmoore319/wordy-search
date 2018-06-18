import * as React from 'react'
import Page2A from './page2a';

class Page2 extends React.Component<any, any> {
    // state = {
    //     age: 0,
    //     location: '',
    //     name: '',
    // }

  public render() {
    return(
      <div>
        <h1>This is Page 2!</h1>
        <p>I am Scott</p>
        <p>27</p>
        <Page2A />
      </div>
  )}
}

export default Page2
