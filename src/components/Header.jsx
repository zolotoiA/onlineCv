import {useState} from "react";
import profilePic from '../img/channel-1.jpeg';
 const Header = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    return (<>
            <div className="header-container">
                <div className="header-bar"><img className="profile-img-top" src={profilePic}/>
                    <div className="text-description">
                        <p className="short-description">ANDREI
                            Web Developer &#183; web designer </p>
                    </div>
                </div>
                <div className="middle">

                </div>
                <div className="right-section-top">
                   <div className="buttons-top">
                    <button>About</button>
                    <button>Portfolio</button>
                    <button>Get in touch</button>
                   </div>
                </div>
            </div>

            <hr></hr>
        </>
    );
 }
export default Header;