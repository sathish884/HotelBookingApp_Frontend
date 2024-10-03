import React from 'react'

function Error({error}) {
    return (
        <>
            <div className="alert alert-danger text-center mx-auto" role="alert" style={{ maxWidth: '35rem', color: 'red' }}>
               <b>{error ? error.message : ""}</b> 
            </div>
        </>
    )
}

export default Error