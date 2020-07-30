import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionTypes } from '../../store/actionTypes';

function InputForm(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    // const [peopleData,setPeopleData] = useState({ppName:'',ppAge:''})

    const onClickSubmit = () => {
        // setPeopleData({ppName:name,ppAge:age})
        // props.submitData(peopleData);
        props.submitNameData(name);
        props.submitAgeData(age);
        props.clearInput();

    }

    return (

        <div>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}></input>
            <input placeholder='Age' onChange={(e) => setAge(e.target.value)} value={age}></input>
            <button onClick={onClickSubmit}>Submit</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // submitData: (value) => dispatch({ type: actionTypes.SUBMIT_DATA,value }),
        submitNameData: (value) => dispatch({ type: actionTypes.SUBMIT_NAME_DATA,value }),
        submitAgeData: (value) => dispatch({ type: actionTypes.SUBMIT_AGE_DATA,value }),
        clearInput: () => dispatch({ type: actionTypes.CLEAR_INPUT })
    }
}
export default connect(null, mapDispatchToProps)(InputForm)
