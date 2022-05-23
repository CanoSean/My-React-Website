import React,{useState} from 'react'
import { IoMdChatboxes, IoMdClose,  IoMdHome,  IoMdMenu } from 'react-icons/io'
import { SiAboutdotme } from "react-icons/si";
import { GiSkills, GiOpenFolder } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';
import { BsQuestion } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import './Navbar.css'

const Header = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <BsQuestion className='menu'/> : <IoMdClose className='menu'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>


                <li>
                    <NavLink to='/My-React-Website' exact="true" activeclassname="active"><IoMdHome className='icon'/></NavLink>
                    <Link to='/My-React-Website'><span>Home</span></Link>
                </li>

                <li>
                    <NavLink to='/about' exact="true" activeclassname="active"><SiAboutdotme className='icon'/></NavLink>
                    <Link to='/about'><span>About me</span></Link>
                </li>


                <li>
                    <NavLink to='/Skills' exact="true" activeclassname="active"><GiSkills className='icon'/></NavLink>
                    <Link to='/Skills'><span>Skills</span></Link>
                </li>


                <li>
                    <NavLink to='/Projects' exact="true" activeclassname="active"><GiOpenFolder className='icon'/></NavLink>
                    <Link to='/Projects'><span>Projects</span></Link>
                </li>


                <li>
                    <NavLink to='/Contact' exact="true" activeclassname="active"><IoMdChatboxes className='icon'/></NavLink>
                    <Link to='/Contact'><span>Contact</span></Link>
                </li>
                <ExternalLink href='https://www.linkedin.com/in/sean-cano/'><AiFillLinkedin className='iconsocial'/></ExternalLink>
                <ExternalLink href='https://github.com/CanoSean'><AiFillGithub className='iconsocial'/></ExternalLink>
                {/* <ExternalLink href='https://twitter.com/St6_developer'><SiTwitter className='iconsocial'/></ExternalLink> */}
            </ul>
        </nav>

    </div>
  )
}

export default Header