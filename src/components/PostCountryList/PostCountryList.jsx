import clsx from "clsx";
import css from "./PostCountryList.module.scss";
import PostCountryListItem from "./PostCountryListItem/PostCountryListItem";
import {useTranslation} from "react-i18next";

const PostCountryList = ({sliderName, title, width ,nowOpen, openFunc}) => {
    const {t} = useTranslation();

    const chooseArr = (sliderName) => {
        if (sliderName === 'slide1') return t("PostCountryList.slide1", {returnObjects: true})
        if (sliderName === 'slide2') return t("PostCountryList.slide2", {returnObjects: true})
    }

    const chosenText = chooseArr(sliderName)

    return (
        <div
            onMouseOver={openFunc}
            className={clsx(
                css.slider_item,
                css[sliderName],
                css[width],
                "d-flex mb-4 mb-md-0 flex-column align-items-start align-items-md-end flex-md-row me-0 me-md-4"
            )}
        >
            <p className={clsx(css.title, 'p-0')}>
                {title}
            </p>
            {nowOpen === sliderName && <ul className={css.content}>
                {chosenText.map(text => <PostCountryListItem key={text} text={text}/>)}
            </ul>}
        </div>
    )
}

export default  PostCountryList;