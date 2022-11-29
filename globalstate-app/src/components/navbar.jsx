import {connect} from 'react-redux';

function Navbar({counter}){
    return(
        <>
            <h1>
                Navbar
            </h1>
            <h3>
                {counter.number}
            </h3>
            <h3>
                {counter.username}
            </h3>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

export default connect(mapStateToProps, null)(Navbar)