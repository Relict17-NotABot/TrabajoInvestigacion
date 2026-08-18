import { Button } from "@base-ui/react";
import { NavLink } from "react-router";

export function HomePage(){
    return(
        <section className="flex items-center justify-around h-full">
            <div><img src="path/to/image.jpg" alt="Imagen hero" /></div>
            <div tabIndex={0} className="max-w-full p-4 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-2">Welcome to Our App</h1>
                <p className="text-gray-600">
                    Welcome to our amazing app! We hope you enjoy your experience.
                </p>
                <NavLink to="/example1">
                    <Button aria-label="Navegacion Accesible" tabIndex={1} className="mt-4 ">
                        
                    </Button>
                </NavLink>
                
            </div>
        </section>
    )
}