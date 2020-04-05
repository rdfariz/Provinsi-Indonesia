import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = (props) => {
//   console.log(props.users)
  return(
    <h1>Hello gaess</h1>
  )
}


function mapStateToProps(state){
    console.log(state.HOME)
    return{
      users: state.HOME
    };
  }
    
//   function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(actions, dispatch)
//     };
//   }

const Connected = connect(
    mapStateToProps
  )(Home);

export default Connected