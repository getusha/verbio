import React from "react";

type listWrapperPropTypes = {
    children: React.ReactNode
}

const ListWrapper = (props: listWrapperPropTypes) => {
    return (
        <ul className="list-disc ml-10 text-white text-2xl md:text-2xl">
            {props.children}
        </ul>
    )
}

export default ListWrapper;