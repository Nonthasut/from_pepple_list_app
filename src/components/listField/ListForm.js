import React from 'react'
import { connect } from 'react-redux'

function ListForm(props) {
    
    return (
        <div>
           
    {props.ppList.map(item=><div><div>{item.ppName}</div><div>{item.ppAge}</div></div>)}          
        
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        ppList: state.ppList.peopleList
    }
    
    }
    

export default connect(mapStateToProps, null)(ListForm)
