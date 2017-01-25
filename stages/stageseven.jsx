import React from 'react';
import { hashHistory } from 'react-router';

class StageSeven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: 'row',
      winState: ''
    };
    this.solution = {
      flexDirection: 'column',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
     hashHistory.push(`/8`);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderNextStage() {
    if (this.state.alignItems === this.solution.alignItems) {
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
              <p>Welcome to Flexbox Flamingo! Guide the flamingos to their puddles by writing CSS code. Use
                <code> flex-direction </code>
                 to move the flamingo to her puddle.
                 <code>flex-direction </code> establishes the main axis, and therefore defining the direction the items are placed.
              </p>
            </div>
            <div className="code-area-container">
              <div className="code-area">
                <pre>land {'{'}
                  <br />
                  display: flex;
                </pre>
                <div className="first-user-input">
                  <code>justify-content:</code>
                  <input type="text" onChange={this.update("flexDirection")} className="user-input"></input>
                </div>
                <br />
                {'}'}
              </div>
            </div>
            {this.renderNextStage()}
          </div>
        </form>
          <div className="view">
            <div className="board" style={this.state}>
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className="flamingo-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className="flamingo-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className="flamingo-img" />
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
