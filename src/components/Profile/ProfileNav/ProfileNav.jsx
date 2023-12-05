import clsx from "clsx";
import css from "../Profile.module.scss";
import {Link} from "react-router-dom";
import sprite from "../../../images/sprite.svg";
import React from "react";

const ProfileNav = () => (
    <div className={clsx(css.leftMenu, 'col-12 col-md-3')}>
    <nav>
        <Link to='#'>
              <span>
                <svg height='25' width='24'>
                  <use href={sprite + '#icon-infoCompany'}></use>
                </svg>
              </span>
            <span>Інформація про компанію</span>
        </Link>
    </nav>
</div>)

export default ProfileNav;
