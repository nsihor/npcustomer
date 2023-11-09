import clsx from "clsx";
import css from "./PostCountryList.module.scss";
import PostCountryListItem from "../PostCountryListItem/PostCountryListItem";
const PostCountryList = ({sliderName, title, width ,nowOpen, openFunc}) => {
    const chooseArr = (sliderName) => {
        if (sliderName === 'pl') {
            return [
                'Працює з жовтня 2022 року',
                'На березень 2023 року має 21 відділення у 9 містах',
                'До кінця року планується відкрити 200 нових відділень',
                'Середній час доставки між Польщею та Україною - 2,5 доби'
            ]
        }
        if (sliderName === 'ua') {
            return [
                'Найбільша логістична компанія, працює з 2001 року',
                'Понад 23 000 точок видачі',
                'Понад 1 млн доставок на день',
                'Лояльність споживачів - 99%',
                'Впізнаваність бренду - 100%',
                'Додаток Nova Post входить в топ3 мобільних додатків України'
            ]
        }
    }
    const chosenText = chooseArr(sliderName)

    return (
        <div
            onMouseOver={openFunc}
            className={clsx(
                css.slider_item,
                css[sliderName],
                "d-flex mb-4 mb-md-0 flex-column align-items-start align-items-md-end flex-md-row me-0 me-md-4"
            )}
        >
            <p className={css.title}>
                {title}
            </p>
            {nowOpen === sliderName && <ul style={{width}} className={css.content}>
                {chosenText.map(text => <PostCountryListItem key={text} text={text}/>)}
            </ul>}
        </div>
    )
}

export default  PostCountryList;