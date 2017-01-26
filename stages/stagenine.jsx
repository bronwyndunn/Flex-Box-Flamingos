import React from 'react';
import { hashHistory } from 'react-router';

class StageNine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: {
        flexWrap: 'no-wrap'
      },
      winState: 'flamingo-img'
    };
    this.solution = {flexWrap: 'wrap'};
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
      css: {
      [field]: e.currentTarget.value
    }
    });
  }

  renderNextStage() {
    if (this.state.css.flexWrap === this.solution.flexWrap) {
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
                <code> flex-wrap </code>
                 to move the flamingo to her puddle. By default, items will try to fit on one line.
                   <code> flex-wrap</code> can change that by wrapping items.
              </p>
              <ul className="flex-options">
                <li>
                  <code>no-wrap: </code>
                  The default. Items are all fit on one line.
                </li>
                <li>
                  <code>wrap: </code>
                  Items are wrapped on multiple lines
                </li>
                <li>
                  <code>wrap-reverse: </code>
                  Same as wrap, but reverse!
                </li>
              </ul>
            </div>
            <div className="code-area-container">
              <div className="code-area">
                <pre>land {'{'}
                  <br />
                  display: flex;
                </pre>
                <div>
                  <code>flex-wrap:</code>
                  <input type="text" onChange={this.update("flexWrap")} className="user-input"></input>
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
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_605/v1485306871/flamingo_nf6sft.png" className={this.state.winState} />
            </div>
            <div style={this.solution} className="puddle">
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_642,w_450/v1485307075/finalpuddle-01_xm6bdf.png" className="puddle-img" />
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
