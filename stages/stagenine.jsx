
import React from 'react';
import { hashHistory } from 'react-router';

class StageNine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: {
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      winState: 'flamingo-img'
    };
    this.solution = {
      alignItems: 'flex-end',
      flexDirection: 'column-reverse'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({winState: 'bounce'});
    setTimeout(function(){
      hashHistory.push(`/10`);
    }, 1000);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderNextStage() {
    if ((this.state.alignItems === this.solution.alignItems) && (this.state.flexDirection === this.solution.flexDirection)) {
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
              <p> Use a combination of
                <code> align-items </code>
                and
                 <code> flex-direction </code> to get the flamingos their puddles.
              </p>
            </div>
            <div className="code-area-container">
              <div className="code-area">
                land {'{'}
                  <br />
                  <div className="indented-code">
                    display: flex;
                    <div className="user-input-text">
                      <div className="first-user-input">
                        <code>align-items:</code>
                        <input type="text" onChange={this.update("alignItems")} className="user-input"></input>
                      </div>
                      <div className="second-user-input">
                        <code>flex-direction:</code>
                        <input type="text" onChange={this.update("flexDirection")} className="user-input"></input>
                      </div>
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
            <div className="board" style={this.state}>
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

export default StageNine;
