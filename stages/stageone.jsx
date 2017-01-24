import React from 'react';

class StageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justifyContent: 'flex-start'
    };
    this.solution = {justifyContent: 'flex-end'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className="game-container">
        <form className="game-form" onSubmit={this.handleSubmit}>
          <div className="sidebar">
            <h1>Flexbox Flamingo</h1>
            <div className="instructions">
              <p>Welcome to Flexbox Flamingo! Guide the flamingos to their puddles by writing CSS code. Use
                <code> justify-content </code>
                 to move the flamingo to her puddle.
              </p>
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
                <pre>land
                  display: flex;
                </pre>
                <input type="text" onChange={this.update("justifyContent")} className="user-input"></input>
              </div>
            </div>
          </div>
          <div className="view">
            <div className="board" style={this.state}>
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_942/v1485237910/flamingo_ht7lw6.png" className="flamingo-img" />
            </div>
            <div style={this.solution}>
              <img src="http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_942/v1485237910/flamingo_ht7lw6.png" className="flamingo-img" />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StageOne;
