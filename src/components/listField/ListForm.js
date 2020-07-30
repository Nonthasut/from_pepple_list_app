import React from 'react'
import { connect } from 'react-redux'

function ListForm(props) {
    
    return (
        <div>
    <div>People List</div>
    <div>       
    {/* {props.ppList.map(item=><div><div>{item.ppName}</div><div>{item.ppAge}</div></div>)}           */}
    {props.ppNameList.map(item=><div>{item}</div>)}          
    {props.ppAgeList.map(item=><div>{item}</div>)}          
    </div>

        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        // ppList: state.ppList.peopleList,
        ppNameList: state.ppNameList.peopleNameList,
        ppAgeList: state.ppAgeList.peopleAgeList
    }  
    }
    

export default connect(mapStateToProps, null)(ListForm)
