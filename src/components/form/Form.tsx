type formPropTypes = {
    onSumbit: React.FormEventHandler;
    children: React.ReactNode;
}

const Form = (props : formPropTypes) => {
    const {onSumbit} = props;

    return(
        <form onSubmit={onSumbit}>
            {props.children}
        </form>
    )
}

export default Form;