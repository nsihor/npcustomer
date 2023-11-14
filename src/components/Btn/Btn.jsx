import css from "./Btn.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Btn = ({styled, text, params, classes = []}) => {
    return (
        <button
            className={clsx(styled === 'success' ? css.btnSuccess : '', css.btn, `btn btn-${styled} text-nowrap mt-4`, classes)}
            type="submit"
            {...params}
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