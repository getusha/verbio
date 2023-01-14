import React from "react";

type containerPropTypes = {
    children: React.ReactNode
}

const Container = (props: containerPropTypes) => {
    return(
        <div className="min-h-screen bg-neutral-900 grid center-center w-screen p-20 font-body text-lg">
            {props.children}
        </div>
    )
}

export default Container;