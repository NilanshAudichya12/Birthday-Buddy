import React from 'react'
import Person from './Person';

function List({info}) {
    return (
        <section>
            {info.map((user) => {
                return <Person key={user.id} {...user}/>
            })}
        </section>
    )
}

export default List;