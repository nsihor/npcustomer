import css from "./Btn.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Btn = ({styled, text, params, classes = []}) => {
    let backgroundColor
    let color

    if (params?.disabled) {
        color = '#94A3B8'
        backgroundColor = '#E2E8F0'
    }

    return (
        <button
            className={clsx(styled === 'success' ? css.btnSuccess : '', css.btn, `border-0 btn btn-${styled} text-nowrap ${classes}`)}
            type="submit"
            {...params}
            style={{backgroundColor, color}}
        >
            {text}
        </button>
    );
};

Btn.PropsType = {
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,
    styled: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
    ]),
}

export default Btn;