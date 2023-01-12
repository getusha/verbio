type listItemTypes = {
    text: string,
    comment?: string
}

const ListItem = ({text, comment} : listItemTypes) => {
    return(
       <>
        <li>{text}<span className="text-lg text-neutral-400">/* {comment} */</span></li>
       </>
    )
}


export default ListItem;