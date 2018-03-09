import React, {Component} from 'react';
import Modal from 'react-modal';
import {FacebookButton} from './FacebookButton.jsx';
import {SignUpModal} from './SignUpModal.jsx';
import {Button} from './Button.jsx';
import captionImg from '../../static/main_caption.jpg';
import s from './main.scss';

const captionStyle = {
  backgroundImage: `url(${captionImg})`
};

export class Caption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authModalIsOpen: false
    };

    this.openAuthModal = this.openAuthModal.bind(this);
    this.closeAuthModal = this.closeAuthModal.bind(this);
  }

  openAuthModal() {
    this.setState({authModalIsOpen: true});
  }

  closeAuthModal() {
    this.setState({authModalIsOpen: false});
  }

  render() {
    return (
      <div className='main__caption' style={captionStyle}>
        <div className='main__caption__layout'>
          <div className='main__caption__layout__header'>Loose your weight with diet planner</div>
          <div className='main__caption__layout__subtext'>The fastest, easiest way to your dream body.</div>
          <div className='main__caption__layout__auth'>
            <Button click={this.openAuthModal}/>
            <div className='main__caption__layout__auth__text'>Already have account? <a>Log in</a></div>
          </div>
        </div>
        <SignUpModal isOpen={this.state.authModalIsOpen} close={this.closeAuthModal}/>
      </div>
    );
  }
}
