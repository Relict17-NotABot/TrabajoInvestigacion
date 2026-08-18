import { NavLink } from "react-router";
import heroImage from "../assets/hero.png";

export function HomePage(){
    return(
        <section aria-labelledby="home-heading" className="flex items-center justify-around h-full">
            <div><img src={heroImage} alt="" /></div>
            <div className="max-w-full p-4 bg-white rounded shadow">
                <h1 id="home-heading" className="text-2xl font-bold mb-2">Welcome to Our App</h1>
                <p className="text-gray-600">
                    Welcome to our amazing app! We hope you enjoy your experience.
                </p>
                <NavLink
                    to="/example1"
                    className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                    Ver ejemplo de navegación accesible
                </NavLink>
                
            </div>
        </section>
    )
}
