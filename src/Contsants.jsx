import {FaSearchLocation} from 'react-icons/fa';
import {BiPackage} from 'react-icons/bi';
import {MdOutlineDesignServices} from 'react-icons/md';
import {TiWorld} from 'react-icons/ti';

export const primaryColor = '#FF1444';

export const image1 = '/assets/image1.webp';

export const whoWeAre = 'We are a marketing and creative agency that works with companies to build bulletproof brands not just through products, but through stories. Often overlooked channels of customer traffic are the digital platforms which we harness to deliver both relevance and results, cost effectively.';

export var services = [
    {title: 'Content Production and Distribution.',
    text: '', 
    icon: <TiWorld style={{color: '#FF1744'}}/>},
       {title: 'Web (UX/UI) Design.'        , text: '', icon: <MdOutlineDesignServices style={{color: '#FF1744'}}/>},
       {title: 'Packaging Design.'          , text: '', icon: <BiPackage style={{color: '#FF1744'}}/>},
       {title: 'Search Engine Optimization.', text: '', icon: <FaSearchLocation style={{color: '#FF1744'}}/>},
]