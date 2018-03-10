import React, {Component} from 'react';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';
import {SignUpModal} from './SignUpModal.jsx';
import {LogInModal} from './LogInModal.jsx';
import {Button} from './Button.jsx';
import captionImg from '../../static/main_caption.jpg';
import s from './main.scss';

const facebookResponse = (resp) => {
  console.log(resp);
};

export class Caption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpModalIsOpen: false,
      logInModalIsOpen: false
    };

    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
    this.openLogInModal = this.openLogInModal.bind(this);
    this.closeLogInModal = this.closeLogInModal.bind(this);
  }

  openSignUpModal() {
    this.setState({signUpModalIsOpen: true});
  }

  closeSignUpModal() {
    this.setState({signUpModalIsOpen: false});
  }

  openLogInModal() {
    this.setState({logInModalIsOpen: true});
  }

  closeLogInModal() {
    this.setState({logInModalIsOpen: false});
  }

  render() {
    const captionStyle = {
      backgroundImage: `url(${captionImg})`
    };

    return (
      <div className='main__caption' style={captionStyle}>
        <div className='main__caption__layout'>
          <div className='main__caption__layout__header'>Loose your weight with diet planner</div>
          <div className='main__caption__layout__subtext'>The fastest, easiest way to your dream body.</div>
          <div className='main__caption__layout__auth'>
            <FacebookLogin
              appId='1817436878556969'
              autoLoad={false}
              fields='name,email'
              cssClass='main__button-fb'
              callback={facebookResponse}/>
            <Button click={this.openSignUpModal}/>
            <div className='main__caption__layout__auth__text'>Already have account? <a onClick={this.openLogInModal}>Log in</a></div>
          </div>
        <SignUpModal isOpen={this.state.signUpModalIsOpen} close={this.closeSignUpModal}/>
        <LogInModal isOpen={this.state.logInModalIsOpen} close={this.closeLogInModal}/>
        <p className="main__caption__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboreet dolore magna aliquyam erat.

Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
      </div>
    );
  }
}
