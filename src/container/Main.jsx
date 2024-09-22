import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';

export class Main extends Component {
  static propTypes = {
    // Define the prop types here, for example:
    someProp: PropTypes.string,
  };

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Map your state to props here
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props here
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
