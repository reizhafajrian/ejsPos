import React from 'react'

export default function Button(props) {
    return (
        <>
            <button className={`btn btn-android-primary`} onClick={props.Click} >hitung</button>
            <h1>{props.hasil}</h1>
        </>
    )
}
