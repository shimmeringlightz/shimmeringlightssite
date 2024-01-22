import React,{useRef,useState,useEffect} from 'react';
import '../navbar/Navbar.css';
import logo from '/src/images/logo.svg';
import {inView, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {

    const[isNavbarToggled,setIsNavbarToggled] = useState(false)

    const navbarspace = useRef(null)
    const navbarcontent = useRef(null)
    const navbarleft = useRef(null)
    const mobiletab1 = useRef(null)
    const mobiletab2 = useRef(null)
    const mobiletab3 = useRef(null)
    const mobiletab4 = useRef(null)
    const shimmeringlights = useRef(null)
    const crossicon = useRef(null)
    

    useEffect(() => {

        if (isNavbarToggled) {
            console.log('toggled')
            navbarspace.current.style.height = '60vh';
            navbarspace.current.style.backgroundColor = '50vh';
            navbarspace.current.style.justifyContent = 'flex-start';
            navbarspace.current.style.alignItems = 'flex-start';
            navbarleft.current.style.display = 'flex';
            navbarleft.current.style.justifyContent = 'space-between';
            navbarleft.current.style.flexDirection = 'column';
            navbarleft.current.style.gap = '40px';
            navbarleft.current.style.justifyContent = 'center';
            navbarleft.current.style.alignItems = 'center';
            navbarleft.current.style.padding= '18px';
            shimmeringlights.current.style.width = '40%';
            shimmeringlights.current.style.height = '40%';
            navbarcontent.current.style.flexDirection = 'column'
            navbarspace.current.style.backdropFilter = 'blur(30px)'
            mobiletab1.current.style.display = 'block';
            mobiletab2.current.style.display = 'block';
            mobiletab3.current.style.display = 'block';
            mobiletab4.current.style.display = 'block';
            navbarcontent.current.style.alignItems = 'center';
            crossicon.current.style.marginTop ='30px'
        } else {
            console.log('not toggled')
            navbarspace.current.style.height = '10vh';
            navbarspace.current.style.justifyContent = 'center';
            navbarspace.current.style.alignItems = 'center';
            mobiletab1.current.style.display = 'none';
            mobiletab2.current.style.display = 'none';
            mobiletab3.current.style.display = 'none';
            mobiletab4.current.style.display = 'none';
            navbarleft.current.style.marginTop= '0%';
            navbarcontent.current.style.flexDirection = 'row';
            shimmeringlights.current.style.width = '100%';
            shimmeringlights.current.style.height = '100%';
            navbarcontent.current.style.alignItems = 'center';
            navbarleft.current.style.padding= '0px'; 
            crossicon.current.style.marginTop ='0px'
        
          
        }

    }, [isNavbarToggled])

    const animation = {
        initial : { y : "-100%"},
        enter : i => ({y:"0",transition:{duration:0.75, ease : [0.33,1,0.68,1],delay : 0.075 * i}})
    }

    return (
        <motion.div ref={navbarspace} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='navbar-space'>
            <div  ref={navbarcontent}  className='navbar-content'>
                <div ref={navbarleft} className='navbar-left'>
                    <img ref={shimmeringlights} className='shimmering-logo' src={logo} width='100%' height='100%' />
                    <motion.div ref={mobiletab1} whileHover={{scale : 1.2}} className='navbar-mobile-tab'>about</motion.div>
                    <motion.div  ref={mobiletab2} whileHover={{scale : 1.2}} className='navbar-mobile-tab'>services</motion.div>
                    <motion.div  ref={mobiletab3}  whileHover={{scale : 1.2}} className='navbar-mobile-tab'>product</motion.div>
                    <motion.div  ref={mobiletab4}  whileHover={{scale : 1.2}} className='navbar-mobile-tab'>contact</motion.div>
                </div>
                <div className='navbar-right'>
                    <motion.div whileHover={{scale : 1.2}} className='navbar-tab'>about</motion.div>
                    <motion.div whileHover={{scale : 1.2}} className='navbar-tab'>services</motion.div>
                    <motion.div  whileHover={{scale : 1.2}} className='navbar-tab'>product</motion.div>
                    <motion.div  whileHover={{scale : 1.2}} className='navbar-tab'>contact</motion.div>
                    <div onClick={()=>setIsNavbarToggled(!isNavbarToggled)} ref={crossicon}  className='burger-menu'>
                      {isNavbarToggled ? (<svg  width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>):
                      
                      
                      
                      
                      (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 40" fill="none">
                      <path d="M6.25 20H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.25 10H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.25 30H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar