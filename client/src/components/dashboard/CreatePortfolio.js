import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../styles/dashboard/styleCreatePortfolio.sass'
import '../../styles/dashboard/media/mediaCreatePortfolio.sass'


class Dashboard extends Component {

    componentDidMount() {

        (function() {
            var select = document.querySelectorAll('select');
            window.M.FormSelect.init(select, {});

            var datepicker = document.querySelectorAll('.datepicker');
            window.M.Datepicker.init(datepicker, {
                format: 'dd mmmm yyyy',
                i18n: {
                    cancel: 'Закрити',
                    months: [
                        'Січень',
                        'Лютий',
                        'Березень',
                        'Квітень',
                        'Травень',
                        'Ченрвень',
                        'Липень',
                        'Серпень',
                        'Вересень',
                        'Жовтень',
                        'Листопад',
                        'Грудень'
                    ],
                    monthsShort: [
                        'Січ',
                        'Лют',
                        'Бер',
                        'Кві',
                        'Тра',
                        'Чер',
                        'Лип',
                        'Сер',
                        'Вер',
                        'Жов',
                        'Лис',
                        'Гру'
                    ],
                    weekdaysShort: [
                            'Нед',
                            'Пон',
                            'Вів',
                            'Сер',
                            'Чет',
                            'Пят',
                            'Суб'
                    ],
                    weekdaysAbbrev: ['Н','П','В','С','Ч','П','С']
                },
                container: 'body',
                selectMonths: true,
                selectYears: 15,
                yearRange: [1935, 2030]
            });

        })()
    }

    onLogoutClick = e => {
        e.preventDefault();
    };

    render() {

        return (
            <div className="Main-wrap">
                <div className="main card">
                    <div className='main-wrap-title'>
                        <p className='main-title-form'>Заповніть відомості про себе</p>
                    </div>
                    <form action="#" method='post' className='main-form'>

                        <ul className="form-list">
                            <li>
                                <span className="name-field">
                                    Прізвище
                                </span>
                                <input placeholder='введіть своє прізвище' type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Ім'я
                                </span>
                                <input placeholder="введіть своє ім'я" type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Побатькові
                                </span>
                                <input placeholder="введіть побатькові" type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    E-mail
                                </span>
                                <input placeholder="введіть E-mail" type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Дата народження
                                </span>
                                <div className="input-field">
                                    <input placeholder="виберіть дату народження" type="text" className="datepicker" />
                                </div>

                            </li>
                            <li>
                                <span className="name-field">
                                    Фото користувача
                                </span>
                                <div className="file-field input-field">
                                    <div className="#00838f cyan darken-3 btn">
                                        <span>Файл</span>
                                        <input className='#00acc1 cyan darken-1' type="file" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input placeholder="виберіть файл" className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Зайнятість
                                </span>
                                <div className="select-wrap-block input-field col s12">
                                    <select className='#c2185b pink darken-2'>
                                        <option value="" disabled selected>Виберіть Ваш варіант</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Посада
                                </span>
                                <div className="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Виберіть Ваш варіант</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Розмір ставки
                                </span>
                                <input placeholder="введіть розмір ставки" type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Підрозділ
                                </span>
                                <div className="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Виберіть Ваш варіант</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Кафедра
                                </span>
                                <div className="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Виберіть Ваш варіант</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <span className="name-field">
                                    Вчене звання
                                </span>
                                <input placeholder="вкажіть вчене звання" type="text"/>
                            </li>
                            <li>
                                <span className="name-field">
                                    Науковий ступінь
                                </span>
                                <input placeholder="вкажіть науковий ступінь" type="text"/>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Освіта
                                    </span>
                                    <div className='textarea-wrap'>
                                        <div className="textarea-tools"></div>
                                        <textarea
                                            name="data" id=""
                                            placeholder='Відомості про освіту (назва навчального закладу, рік завершення, тощо; кожен з нового рядка)'
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Перелік місць<br/> роботи
                                    </span>
                                    <div className='textarea-wrap'>
                                        <div className="textarea-tools"></div>
                                        <textarea
                                            name="data" id=""
                                            cols="30" rows="15"
                                            placeholder='Перелік місць роботи (установа, посада, рік, тощо; окремо з нового рядка)'
                                        >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Теми десертанцій<br/> (захищених)
                                    </span>
                                    <div className='textarea-wrap'>
                                        <div className="textarea-tools"></div>
                                        <textarea
                                            name="data" id=""
                                            cols="30" rows="15"
                                            placeholder='Перелік місць роботи (установа, посада, рік, тощо; окремо з нового рядка)'
                                        >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="plugins-data-wrap">
                                    <span className="name-field">
                                        Громадська<br/> активнівть
                                    </span>
                                    <div className='textarea-wrap'>
                                        <textarea
                                            className='social-activity'
                                            name="data" id=""
                                            cols="30" rows="5"
                                            placeholder='Громадська активність (окремо з нового рядка)'
                                        >
                                    </textarea>
                                    </div>
                                </div>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    Посилання на сторінку Google Академії
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на сторінку Google Академії'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    LinkedIn
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на профіль LinkedIn'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    Facebook
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на профіль Facebook'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    Google Plus
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на профіль Google Plus'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    Сторінка користувача
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на особистий сайт, блог, тощо.'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    ResearcherID
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на ResearcherID'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    ORCID
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на ORCID'/>
                            </li>
                            <li className='social-link-field'>
                                <span className="name-field">
                                    Scopus
                                </span>
                                <input className='social-input' type="text" placeholder='Посилання на Scopus'/>
                            </li>
                            <li>
                                <div className="btn-wrap">
                                    <button
                                        className='
                                            #689f38 light-green darken-2
                                            crPor-btns
                                            waves-effect
                                            waves-light
                                            btn'
                                        type='button'
                                    >Зберегти</button>
                                    <Link className='linkCancelToDashboard' to='dashboard'>
                                        <button
                                            className='
                                                #607d8b blue-grey
                                                crPor-btns
                                                btn
                                                waves-light
                                                waves-effect
                                            '
                                        >Скасувати</button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
