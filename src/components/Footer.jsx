import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
// Reusable SocialIcon component with hover effect
const SocialIcon = ({ icon: Icon }) => (
    <Icon className="social-icon-hover-text" size={30} />
);
// Footer component
const Footer = () => {
    // Array defining the content and structure of the footer
    const items = [
        // Social media icons
        { type: 'icon', icon: FaFacebookSquare },
        { type: 'icon', icon: FaInstagram },
        { type: 'icon', icon: FaTwitterSquare },
        { type: 'icon', icon: FaGithubSquare },
        { type: 'icon', icon: FaDribbbleSquare },
        // Footer sections
        { type: 'section', title: 'Solutions', items: ['Analytics', 'Marketing', 'Commerce', 'Insights'] },
        { type: 'section', title: 'Support', items: ['Pricing', 'Documentation', 'Guides', 'API Status'] },
        { type: 'section', title: 'Company', items: ['About', 'Blog', 'Jobs', 'Press', 'Careers'] },
        { type: 'section', title: 'Legal', items: ['Claim', 'Policy', 'Terms'] },
    ];
    // JSX structure of the footer
    return (
        <div className='footer'>
            {/* Left section with brand and social icons */}
            <div>
                <h1 className='footer-logo'>REACT.</h1>
                <p className='paragraf-style'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur
                    libero reiciendis, blanditiis accusantium.
                </p>
                <div className='social-media-container'>
                    {/* Mapping over social icons and rendering the SocialIcon component */}
                    {items.map((item, index) => (
                        item.type === 'icon' ? (
                            <SocialIcon key={index} icon={item.icon} />
                        ) : null
                    ))}
                </div>
            </div>
            {/* Right section with footer content organized in sections */}
            <div className='right-section-container'>
                {/* Mapping over sections and rendering content */}
                {items.map((item, index) => (
                    item.type === 'section' ? (
                        <div key={index}>
                            <h6 className="right-item-title">{item.title}</h6>
                            <ul>
                                {/* Mapping over items in each section */}
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} className='index-text'>{subItem}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};
export default Footer;