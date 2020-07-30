import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionTypes } from '../../store/actionTypes';

function InputForm(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [peopleData,setPeopleData] = useState({ppName:'',ppAge:''})

    const onClickSubmit = () => {
        setPeopleData({ppName:name,ppAge:age})
        props.SUBMIT_NAME_DATA(peopleData);
        props.CLEAR_INPUT();

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
        submitNameData: (value) => dispatch({ type: actionTypes.SUBMIT_DATA,value }),
        clearInput: () => dispatch({ type: actionTypes.CLEAR_INPUT })
    }
}
export default connect(null, mapDispatchToProps)(InputForm)
