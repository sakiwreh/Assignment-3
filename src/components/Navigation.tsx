import ThemeButton from "./ThemeButton";

function Navigation(){
    return(
        <>
            <div className="bg-gray-900 text-white p-3 justify-between items-center dark:bg-green">
                <div className="flex space-x-4">
                <a href="#">Home</a>
                <a href="#">Quick Service</a>
                <a href="#">Help</a>
                <a href="#">Logout</a>
                <ThemeButton/>
                </div>
            </div>
        </>
    )
}

export default Navigation;