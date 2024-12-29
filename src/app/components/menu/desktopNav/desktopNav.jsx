import React from 'react'
import desktopMenu from "./desktopNav.module.css"
//import Link from 'next/link';
import CustomLink from '../../customLink.jsx';


const DesktopNav = ({items,align="center"}) => {
    const menuCollector = [];
    for(const item of items){
        menuCollector.push(<div><CustomLink href={item.link}>{item.title}</CustomLink></div>)
    }
    return (
        <nav style={{justifyContent:align}} className={desktopMenu.mainNav}>
            {menuCollector}
        </nav>
    )
}

export default DesktopNav