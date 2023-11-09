import sprite from "../../images/sprite.svg";
import css from "./PostCountryListItem.module.scss";

const PostCountryListItem = ({text}) => {

    return (
        <li className={css.check_item}>
            <div className={css.svg_container}>
                <svg>
                    <use href={sprite + "#icon-check"}></use>
                </svg>{" "}
            </div>
            {text}{" "}
        </li>
    )
}

export default PostCountryListItem;