import React from 'react';

class List extends React.Component{
    render(){
        return(
            <li>
                {
                    `${this.props.data.name}, ${this.props.data.umur} Tahun`
                }
            </li>
        )
    }
}

export default List