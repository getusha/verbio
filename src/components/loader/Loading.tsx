import logo from "../../assets/verbio.png";

const Loading = () => {
    return (
        <div className="absolute h-screen w-screen bg-neutral-900 flex justify-center">
            <img src={logo} alt="" className="h-40 mt-auto mb-auto" />
        </div>
    )
}

export default Loading;