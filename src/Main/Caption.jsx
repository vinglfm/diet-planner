import React, {Component} from 'react';
import captionImg from '../../static/main_caption.jpg';
import s from './main.scss';

const captionStyle = {
  backgroundImage: `url(${captionImg})`
}

export class Caption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main__caption' style={captionStyle}>
      </div>
    );
  }
}
