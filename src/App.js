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
      <h1>RÉSUMÉ CREATOR</h1>
      <div className='button-wrapper'>
        <button name='edit' onClick={this.handleBtnClick}>Edit Résumé</button>
        <button name='preview' onClick={this.handleBtnClick}>Preview Résumé</button>
      </div>

      <Page previewMode={this.state.previewMode} />
    </div>
  );
  }
}


