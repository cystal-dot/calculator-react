import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Button extends React.Component {
  render() {
    return (
      <button className='Button'>
        {this.props.value}
      </button>
    );
  }
}

class Calclator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : 0,
      }
    }

  renderButton(params) {
    return (
      <Button 
        value = {params}
        onClick = { () => this.handleClick(params)}
      />
    )
  }

  handleClick(i) {
    console.log("test")
    this.setState({
      result : this.state.result+i,
    })
  }

  renderResult() {
    return (
      <text className='Result'>
        {this.state.result}
      </text>
    )
  }

  render() {
    return (
      <div>
        {this.renderResult()}
        <div className='Button'>
          <div className='line1'>
            {this.renderButton(1)}
            {this.renderButton(2)}
            {this.renderButton(3)}
          </div>
          <div className='line2'>
            {this.renderButton(4)}
            {this.renderButton(5)}
            {this.renderButton(6)}
          </div>
          <div className='line3'>
            {this.renderButton(7)}
            {this.renderButton(8)}
            {this.renderButton(9)}
          </div>
            {this.renderButton(0)}
            {this.renderButton(0)}
            {this.renderButton(0)}
        </div>
      </div>
    );
  }
}

// root.render ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calclator />);
