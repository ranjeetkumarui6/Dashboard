import React, { useState } from 'react'
import styles from './index.module.css'
import logo from '../../assets/logo.png'
import MenuToggle from './MenuToggleCom/Index'
import { MdLockOutline, MdMenuOpen, MdOutlineFormatListBulleted, MdOutlineHome, MdOutlineSendTimeExtension, MdOutlineSportsFootball, MdOutlineSportsVolleyball, MdOutlineTableChart } from "react-icons/md";
import { FiGrid, FiShoppingBag } from "react-icons/fi";
import { RiGridFill, RiPagesLine } from 'react-icons/ri';
import MenuTitle from './SectionTitle/Index';
import { IoCardSharp, IoDocumentTextOutline } from 'react-icons/io5';
import { TiShoppingBag } from 'react-icons/ti';
import { AiOutlineShopping } from 'react-icons/ai';
import { TfiGift } from 'react-icons/tfi';
import { PiRows } from 'react-icons/pi';
import { FaQuestion, FaRegUser } from 'react-icons/fa6';
import { SlChart } from 'react-icons/sl';
import { TbMapShare } from 'react-icons/tb';
import { HiOutlineChartBar } from 'react-icons/hi';
import { CgSupport } from 'react-icons/cg';
import { useDispatch } from "react-redux";
import { uiActions } from '../../Redux/Slices/Index';


const SideMenu = () => {
  const dispatch=useDispatch()


  return (
    <>
      <aside className={styles.sidemenucontainer}  onClick={()=>dispatch(uiActions.Handlebody(),dispatch(uiActions.Handlebody()))}> 
       <div className={styles.logocontainer}>
            <img src={logo} alt="logopic" />
            <h5>Maxton</h5>
       </div>
       <div className={styles.contentcontainer}>
       <MenuToggle  menulogos={<MdOutlineHome  size={23}/>}  name="Dashboard"/>
       <MenuToggle  menulogos={<FiGrid  size={23}/>}  name="Widgets"/>
       <MenuToggle  menulogos={<RiGridFill  size={23}/>}  name="Apps"/>
        <MenuTitle name="UI ELEMENTS"/>
       <MenuToggle  menulogos={<FiShoppingBag  size={23} />}  name="Cards"/>
       <MenuToggle  menulogos={<AiOutlineShopping  size={23}/>}  name="Ecommerce"/>
       <MenuToggle  menulogos={<TfiGift  size={23}/>}  name="Components"/>
       <MenuToggle  menulogos={<PiRows  size={23}/>}  name="Icons"/>
       <MenuTitle name="FORMS & TABLES"/>
       <MenuToggle  menulogos={<MdOutlineFormatListBulleted  size={23}/>}  name="Forms"/>
       <MenuToggle  menulogos={<MdOutlineTableChart  size={23}/>}  name="Tables"/>
       <MenuTitle name="Pages"/>
       <MenuToggle  menulogos={<MdLockOutline  size={23}/>}  name="Authentication"/>
       <MenuToggle  menulogos={<FaRegUser  size={23}/>}  name="User Profile"/>
       <MenuToggle  menulogos={<MdOutlineSendTimeExtension  size={23}/>}  name="Time Line"/>
       <MenuToggle  menulogos={<RiPagesLine  size={23}/>}  name="Pages"/>
       <MenuToggle  menulogos={<FaQuestion  size={23}/>}  name="FAQ"/>
       <MenuToggle  menulogos={<MdOutlineSportsFootball  size={23}/>}  name="Pricing"/>
       <MenuTitle name="Charts & Maps"/>
       <MenuToggle  menulogos={<HiOutlineChartBar   size={23}/>}  name="Charts"/>
       <MenuToggle  menulogos={<TbMapShare  size={23}/>}  name="Maps"/>
       <MenuTitle name="Others"/>
       <MenuToggle  menulogos={<MdMenuOpen  size={23}/>}  name="Menu Level"/>
       <MenuToggle  menulogos={<IoDocumentTextOutline  size={23}/>}  name="Documentation"/>
       <MenuToggle  menulogos={<CgSupport  size={23}/>}  name="Support"/>
        </div>
      </aside>
    </>
  )
}

export default SideMenu
