var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper= require('../components/UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

// function puke (object) {
//     return <pre>{JSON.stringify(object, null, ' ')}</pre>
// }

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading text='Waiting' speed={300}/>
    : <MainContainer>
        <h1>Confirm Players</h1>

        <div className='col-sm-8 col-sm-offset-2'>
            <UserDetailsWrapper header='Player 1'>
              <UserDetails info={props.playersInfo[0]}  />
            </UserDetailsWrapper>

            <UserDetailsWrapper header='Player 2'>
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
       </MainContainer>
}

ConfirmBattle.propTyoes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
}

module.exports = ConfirmBattle;
