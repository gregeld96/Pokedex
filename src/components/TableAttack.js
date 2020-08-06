import React from 'react'

function TableAttack ({attack, index}) {
    return (
        <>
        <tbody>
        <td>{index + 1}</td>
            <td>{attack.name}</td>
            <td>{attack.damage}</td>
            <td>{attack.text}</td>
        </tbody>
        </>
    )
}

export default TableAttack