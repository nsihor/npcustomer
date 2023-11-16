import css from "./Profile.module.scss";
import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import "bootstrap/dist/js/bootstrap";
import InputFloating from "../InputFloating/InputFloating";
import {Form, Formik} from "formik";

const Profile = ({userData}) => {
    return (
        <div className={clsx(css.content)}>
            <div className="container d-flex">
                <div className={clsx(css.leftMenu, "col-12 col-md-3")}>
                    <nav>
                        <a href="#">
                            <svg height="25" width="24"><use href={sprite + "#icon-infoCompany"}></use></svg>
                            Інформація про компанію
                        </a>
                    </nav>
                </div>
                <div className={clsx(css.burgerWrapper, "col-12 col-md-9")}>
                    {userData.email}

                    <div className={clsx(css.burger, "accordion w-100")} id="accordionProfile">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                >
                                    Налаштування способу оплати PayU
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionProfile">
                                <div className="accordion-body">


                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Налаштування способу доставки Nova Post
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionProfile">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    Підключення BaseLinker
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionProfile">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                    Дані для входу в профіль компанії
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse"
                                 aria-labelledby="headingFour" data-bs-parent="#accordionProfile">
                                <div className="accordion-body">
                                    <Formik initialValues={{
                                        email: userData.email ?? '',
                                        password: userData.password ?? '',
                                    }}
                                            onSubmit={value => {console.log(1)}}>

                                    <Form>
                                        <InputFloating name="email" type="email" placeholder="Email"/>
                                        <div className="btn btn-link">Замінити</div>
                                        <InputFloating name="password" placeholder="Пароль"/>
                                        <div className="btn btn-link">Замінити</div>
                                    </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
