import Header from './components/header.tsx';
import Container from './components/container.tsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
      <Header title="The Taganrog Times" />
      <Container posts={[]} />
      </>
    )
  }
}
export default App
