import React from "react";
import { Link } from "react-router-dom";


const CreatePortfolio = (props) => {

    const { onChange, onSubmit } = props;
    const {
        firstName,
        lastName,
        middleName,
        email,
        dateOfBirth,
        photo,
        employment,
        position,
        bidSize,
        subsection,
        department,
        academicStatus,
        degree
    } = props.fieldsData;

    return (
        <div className="Main-wrap">
            <div className="main card">
                <div className='main-wrap-title'>
                    <p className='main-title-form'>Заповніть відомості про себе</p>
                </div>
                <form className='main-form' action='#'>

                    <ul className="form-list">
                        <li>
                                <span className="name-field">
                                    Прізвище
                                </span>
                            <input
                                onChange={onChange}
                                value={lastName}
                                id="lastName"
                                placeholder='введіть своє прізвище'
                                type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    Ім'я
                                </span>
                            <input
                                onChange={onChange}
                                value={firstName}
                                id="firstName"
                                placeholder="введіть своє ім'я"
                               type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    Побатькові
                                </span>
                            <input
                                onChange={onChange}
                                value={middleName}
                                id="middleName"
                                placeholder="введіть побатькові"
                                type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    E-mail
                                </span>
                            <input
                                onChange={onChange}
                                value={email}
                                id="email"
                                placeholder="введіть E-mail"
                                type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    Дата народження
                                </span>
                            <div className="input-field">
                                <input
                                    id="dateOfBirth"
                                    placeholder="виберіть дату народження"
                                    type="text"
                                    className="datepicker"
                                />
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
                                <select
                                    onChange={onChange}
                                    value={employment}
                                    id="employment"
                                    className='#c2185b pink darken-2'
                                >
                                    <option value="" disabled selected>Виберіть Ваш варіант</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select>
                            </div>
                        </li>
                        <li>
                                <span className="name-field">
                                    Посада
                                </span>
                            <div className="input-field col s12">
                                <select
                                    onChange={onChange}
                                    value={position}
                                    id="position"
                                >
                                    <option value="" disabled selected>Виберіть Ваш варіант</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select>
                            </div>
                        </li>
                        <li>
                                <span className="name-field">
                                    Розмір ставки
                                </span>
                            <input
                                onChange={onChange}
                                value={bidSize}
                                id="bidSize"
                                placeholder="введіть розмір ставки"
                                type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    Підрозділ
                                </span>
                            <div className="input-field col s12">
                                <select
                                    onChange={onChange}
                                    value={subsection}
                                    id="subsection"
                                >
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
                                <select
                                    onChange={onChange}
                                    value={department}
                                    id="department"
                                >
                                    <option value="" disabled selected>Виберіть Ваш варіант</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select>
                            </div>
                        </li>
                        <li>
                                <span className="name-field">
                                    Вчене звання
                                </span>
                            <input
                                onChange={onChange}
                                value={academicStatus}
                                id="academicStatus"
                                placeholder="вкажіть вчене звання"
                                type="text"
                            />
                        </li>
                        <li>
                                <span className="name-field">
                                    Науковий ступінь
                                </span>
                            <input
                                onChange={onChange}
                                value={degree}
                                id="degree"
                                placeholder="вкажіть науковий ступінь"
                                type="text"
                            />
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
                                    onClick={onSubmit}
                                    className='
                                            #689f38 light-green darken-2
                                            crPor-btns
                                            waves-effect
                                            waves-light
                                            btn'
                                    type='button'
                                >Зберегти</button>
                                <Link className='linkCancelToDashboard' to='/dashboard'>
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
};

export default CreatePortfolio




