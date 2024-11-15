import React from "react";
import styles from "./index.module.css";
import india from "../../../assets/CountryIcons/in.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineNotifications, MdOutlineShoppingCart } from "react-icons/md";
import pic from "../../../assets/mypic.jpg";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Redux/Slices/Index";
import { countrydata } from "../../../Data/Countrydata";
import { checkdata } from "../../../Data/Ckeckdata";
const NavSocials = () => {
  const country = useSelector((state) => state.rootreducer.country);
  const check = useSelector((state) => state.rootreducer.check);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.navsocialicons}>
        <div
          className={styles.Socials}
          onClick={() => dispatch(uiActions.HandleCountry(country))}
        >
          <div className={styles.togglecntainer}>
            <img src={india} alt="indiaflag" />
          {country&&<div className={styles.togglecountry}>
            <span className={styles.arrow}></span>
            <ul>
               {countrydata.map(it=>{
                return <li key={it.id}>
                    <div className={styles.img}>
                    <img src={it.img} alt={it.img} />
                    </div>
                    <span>{it.lang}</span>
                </li>
               })}
            </ul>
            </div>}
          </div>
        </div>
        <div className={styles.Socials} onClick={()=>dispatch(uiActions.HandleCheck(check))}>
          <IoCheckmarkDoneSharp size={30} />
         {check && <div className={styles.checkcontainer} >
            {
              checkdata.map(it=>{
                return <div className={styles.checkbody} key={it.id}>
                  <div className={styles.leftimg}>
                <div className={styles.imgcontainer}>
                  {it.logo1 ? <i>{it.logo1}</i> : <img src={it.logo} alt="check logos" />}
                  
                </div>
                </div>
                <div className={styles.contentcontainer}>
                  <h2>{it.title}</h2>
                  <p>{it.desc}</p>
                </div>
              </div>
              })
            }
            
          </div>
}
        </div>
        <div className={styles.Socials}>
          <BsGrid3X3GapFill size={25} />
        </div>
        <div className={styles.Socials}>
          <div className={styles.notficationno}>4</div>
          <MdOutlineNotifications size={27} />
        </div>
        <div className={styles.Socials}>
          <div className={styles.notficationno}>3</div>
          <MdOutlineShoppingCart size={25} />
        </div>
        <div className={styles.profile}>
          <img src={pic} alt="profileicon" />
        </div>
      </div>
    </>
  );
};

export default NavSocials;
