import React from 'react';
import './LandingPage.css';

// Vendor Imports
import WaverioImg from '../assets/vendors/Waverio.png';
import LogoipsumImg from '../assets/vendors/Logoipsum.png';
import AlterboneImg from '../assets/vendors/Alterbone.png';
import TinygoneImg from '../assets/vendors/Tinygone.png';
import LastCompany from '../assets/vendors/LastCompany.png';

// Cities imports
import ChennaiImg from '../assets/Cities/Chennai.jpg';
import MumbaiImg from '../assets/Cities/Mumbai.jpg';
import KolkataImg from '../assets/Cities/Kolkata.jpg';
import JaipurImg from '../assets/Cities/Jaipur.jpg';
import PuneImg from '../assets/Cities/Pune.jpg';
import NagpurImg from '../assets/Cities/Nagpur.jpg';

const vendors = [
    { name: 'Waverio', icon: WaverioImg },
    { name: 'LOGOIPSUM', icon: LogoipsumImg },
    { name: 'Alterbone', icon: AlterboneImg },
    { name: 'Tinygone', icon: TinygoneImg },
    { name: '', icon: LastCompany },
];

const venues = [
    { name: 'Chennai', img: ChennaiImg },
    { name: 'Mumbai', img: MumbaiImg },
    { name: 'Kolkata', img: KolkataImg },
    { name: 'Jaipur', img: JaipurImg },
    { name: 'Pune', img: PuneImg },
    { name: 'Nagpur', img: NagpurImg },
];

const LandingPage = () => {
    return (
        <div className="page-wrapper">
            {/* Vendors Section */}
            <div className="vendor-container">
                <h2 className="vendor-title">Our Vendors</h2>
                <div className="logo-pill">
                    {vendors.map((vendor, index) => (
                        <div key={index} className="logo-item">
                            <img src={vendor.icon} alt={vendor.name} className="logo-icon" />
                            <span className="logo-text">{vendor.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Venues Section */}
            <div className="venues-section">
                <h2 className="section-title">Top Venues By Cities</h2>
                <div className="venues-grid">
                    {venues.map((venue, index) => (
                        <div key={index} className="venue-card">
                            <div className="venue-image-wrapper">
                                <img src={venue.img} alt={venue.name} className="venue-img" />
                            </div>
                            <p className="venue-name">{venue.name}</p>
                        </div>
                    ))}
                    
                    {/* View All Card */}
                    <div className="venue-card view-all">
                        <div className="venue-image-wrapper view-all-box">
                           <div className="view-all-icon">🏢</div>
                        </div>
                        <p className="venue-name">View all</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;