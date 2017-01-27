import React from 'react';
import { hashHistory } from 'react-router';

class StageSeven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: {
        flexDirection: 'row'
      },
      winState: 'flamingo-img'
    };
    this.solution = {
      flexDirection: 'column',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.css.flexDirection === this.solution.flexDirection) {
      this.setState({winState: 'bounce'});
      setTimeout(function(){
        hashHistory.push(`/8`);
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
    if (this.state.css.flexDirection === this.solution.flexDirection) {
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
              <p> Now use
                <code> flex-direction </code>
                 to move the flamingo to her puddle.
                 <code> flex-direction </code> establishes the main axis, and therefore defining the direction the items are placed.
              </p>
              <ul className="flex-options">
                <li>
                  <code>row: </code>
                  Items are placed along the horizontal axis.
                </li>
                <li>
                  <code>row-reverse: </code>
                  Items are placed along the horizontal axis but in the opposite direction.
                </li>
                <li>
                  <code>column: </code>
                  Items are placed along the vertical axis.
                </li>
                <li>
                  <code>column-reverse: </code>
                    Items are placed along the vertical axis but in the opposite direction.
                </li>
              </ul>
            </div>
            <div className="code-area-container">
              <div className="code-area">
                land {'{'}
                  <br />
                  <div className="indented-code">
                  display: flex;
                  <div className="user-input-text">
                    <div className="first-user-input">
                      <code>flex-direction:</code>
                      <input type="text" onChange={this.update("flexDirection")} className="user-input"></input>
                    </div>
                  </div>
                <br />
                {'}'}
              </div>
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
            <div style={this.solution} className="puddle-7">
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
          </div>
          </div>
      </div>
    );
  }
}

export default StageSeven;
