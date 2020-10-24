import React from 'react';
import {useRouter} from "next/router";

function Chai() {
    const router = useRouter()
    console.log(router.query)

    return(
        <div className="chai">
            I am chai
        </div>
    )
}

export default Chai