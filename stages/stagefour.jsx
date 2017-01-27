import React from 'react';
import { hashHistory } from 'react-router';

class StageFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: {
        alignItems: 'flex-start'
      },
      winState: 'flamingo-img'
    };
    this.solution = {alignItems: 'flex-end'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.css.alignItems === this.solution.alignItems) {
      this.setState({winState: 'bounce'});
      setTimeout(function(){
        hashHistory.push(`/5`);
      }, 1000);
    }
  }

  update(field) {
    return e => this.setState({
      css: {
      [field]: e.currentTarget.value
    }
    });
  }

  renderNextStage() {
    if (this.state.css.alignItems === this.solution.alignItems) {
      return(
        <button type="submit">Next stage!</button>
      );
    }
  }

  render() {
    return(
      <div className="game-container">
        <form className="game-form" onSubmit={this.handleSubmit}>
          <div className="sidebar">
            <h1>Flexbox Flamingo</h1>
            <div className="instructions">
              Now use
                <code> align-items </code>
                 to move the flamingo to her puddle.
                 <code> align-items </code> is like
                   <code> justify-content</code>, but in the perpendicular direction.
              <ul className="flex-options">
                <li>
                  <code>flex-start: </code>
                  Items are packed at the start of the line.
                </li>
                <li>
                  <code>flex-end: </code>
                  Items are packed at the end of the line.
                </li>
                <li>
                  <code>center: </code>
                  Items are centered along the line.
                </li>
                <li>
                  <code>space-between: </code>
                  First item is on the start of the line, last item is on the end of the line. Other items are evenly distibuted between.
                </li>
                <li>
                  <code>space-around: </code>
                  Items are eventually distributed along the line.
                </li>
              </ul>
            </div>
            <div className="code-area-container">
              <div className="code-area">
                #land {'{'}
                  <br />
                    <div className="indented-code">
                    display: flex;
                    <div className="user-input-text">
                      <code>justify-content:</code>
                        <input type="text" onChange={this.update("alignItems")} className="user-input"></input>
                    </div>
                  </div>
                  <br />
                {'}'}
              </div>
            </div>
            {this.renderNextStage()}
          </div>
        </form>
          <div className="view">
            <div className="board" style={this.state.css}>
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
            </div>
            <div style={this.solution} className="puddle">
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
          </div>
          </div>
      </div>
    );
  }
}

export default StageFour;
