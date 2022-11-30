import {connect} from 'react-redux'

import { FetchApi } from './../redux/actions/dataAction';

import {useEffect} from 'react'

function GetData({FetchApi, dataComponent}){
    useEffect(() => {
        FetchApi()
    }, [])
    return(
        <div>
            Get Data Page 
            <h6>
                {dataComponent.message}
            </h6>
            {
                dataComponent.data.map((value, index) => {
                    return(
                        <div>{value.name}</div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataComponent: state.dataReducer 
    }
}

const mapDispatchToProps = {
    FetchApi
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData)