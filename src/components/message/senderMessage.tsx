import { useEffect, useState } from "react"

type senderPropTypes = {
    message: string
}

const SenderMessage = ({message} : senderPropTypes) => {

    const [animate, setAnimate] = useState<boolean>(true);

    useEffect(()=>{
        const iTimer = setTimeout(() => {
            setAnimate(false);
        }, 1000);

        // return clearTimeout(iTimer);
    }, [])

    return (
        <div className={`${animate ? "animate-pulse " : ""} ease-out duration-75 relative text-white p-3 bg-slate-300 w-2/3 ml-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-2`}>
            <span>{message}</span>
        </div>
    )
}

export default SenderMessage;