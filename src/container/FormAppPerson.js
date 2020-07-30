import React from 'react'
import {connect} from 'react-redux'
import {actionTypes} from '../store/actionTypes'
import InputForm from '../components/headerField/InputForm'
import ListForm from '../components/listField/ListForm'

function FormAppPerson() {
    return (
        <div>
        <InputForm />
        <ListForm />            
        </div>
    )
}


export default FormAppPerson
