import Page from './components/first-level/Page';
import './styles.css';
import React from 'react';


export default class App extends React.Component {
    state = {
    previewMode: false,
    };

  handleBtnClick = (e) => {
      let boolean;
      if (e.target.name === 'edit') boolean = false;
      if (e.target.name === 'preview') boolean = true;
      this.setState({ previewMode: boolean });
  }

  render() {
    return (
    <div className='app'>
      <h1>RESUME CREATOR</h1>
      <button name='edit' onClick={this.handleBtnClick}>Edit</button>
      <button name='preview' onClick={this.handleBtnClick}>Preview</button>

      <Page previewMode={this.state.previewMode} />
    </div>
  );
  }
}


