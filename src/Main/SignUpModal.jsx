import React, {Component} from 'react';
import Modal from 'react-modal';

const signUpModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.log('signUp');
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        contentLabel='Sign up'
        style={signUpModalStyle}
        appElement={document.getElementById('diet-app')}>
        <div className='modal__header'>Sign Up</div>
        <hr class="modal__divider"/>
        <form className='modal__form' name='signUpForm' onSubmit={this.signUp} role='form'>
          <label className='modal__form__label'>Email<span className='modal__form__label-required'>*</span></label>
          <input className='modal__form__input' type='email' name='userName'/>
          <label className='modal__form__label'>Password<span className='modal__form__label-required'>*</span></label>
          <input className='modal__form__input' type='password' name='password' placeholder='Password' minLength='8' maxLength='16'/>
          <label className='modal__form__label'>Full Name</label>
          <input className='modal__form__input-small' type='text' name='firstName' placeholder='First'/>&nbsp;
          <input className='modal__form__input-small' type='text' name='lastName' placeholder='Last'/>
          <div className='modal__form__group'>
            <input className='modal__form__group__submit' type='submit' value='Create Account'/>
          </div>
        </form>

      </Modal>
    );
  }
}
