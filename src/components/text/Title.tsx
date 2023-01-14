type titlePropTypes = {
    text: string
}

const Title = (props: titlePropTypes)=> {
    return <h1 className="text-white font-display text-5xl">{props.text}</h1>
}

export default Title;