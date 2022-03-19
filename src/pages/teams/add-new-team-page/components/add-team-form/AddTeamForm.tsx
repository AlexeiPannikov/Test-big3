import React from 'react'
import cl from './AddTeamForm.module.scss'
import Breadcrumbs from '../../../../../components/breadcrumbs/Breadcrumbs'

const AddTeamForm = () => {
    return (
        <div className={cl.AddTeamForm}>
            <header className={cl.Header}>
                <Breadcrumbs />
            </header>
        </div>
    )
}

export default AddTeamForm
