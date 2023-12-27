import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
    const { aboutMe } = useContext(AboutMeContext);

    return(
        <div className="block sm:flex sm:gap:10 mt-10 sm:mt-20">
            <div className="w-full sm:w-3/4 text-left">
                { aboutMe.map((bio) => (
                    <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        { bio.bio }
                    </p>
                ))}
            </div>
        </div>
    )
}

export default AboutMeBio;