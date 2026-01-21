import { useEffect, useState } from "react";

function ThemeButton(){
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    },[]);

    const toggleTheme = () =>{
        const root = document.documentElement;
        if(isDark){
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    return(
        <>
        <button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-200">
            {isDark ? "🌙 Dark":"☀️ Light"}
        </button>
        </>
    )
}
export default ThemeButton;