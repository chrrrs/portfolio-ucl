import React, {Component} from 'react';

class ScrollTop extends Component {

  scroll = () => {
    const topPage = document.querySelector('#top');

    topPage.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return(
      <a className="has-text-centered" onClick={this.scroll}><i className="fas fa-angle-up"></i> tilbage til toppen</a>
    )
  }
}

export default ScrollTop;
