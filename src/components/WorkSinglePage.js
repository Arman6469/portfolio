import React, {useState, useEffect} from 'react'

export default function WorkSinglePage({match}) {
    const [singleWork, setSingleWork] = useState({});

    const workId = match.params.id;

    useEffect(() => {
        console.log('hello world');
    },[])


    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}
