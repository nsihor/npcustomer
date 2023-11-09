import css from "./Btn.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Btn = ({type, text, id}) => {
    return (
        <button className={clsx(type === 'success' ? css.btnSuccess : '', css.btn, `btn btn-${type} text-nowrap mt-4`)} id={id}>
            {text}
        </button>
    );
};


Btn.PropsType = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
    type: PropTypes.oneOf([
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