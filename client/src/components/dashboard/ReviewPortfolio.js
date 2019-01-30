import React, { Component } from 'react';

import '../../styles/dashboard/reviewPortfolio/styleReviewPortfolio.sass';


class UserPortfolio extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (function() {
            let elems = document.querySelectorAll('.collapsible');
            let instances = window.M.Collapsible.init(elems, {});
        })()
    }

    render() {
        return (
            <div className="userPortfolio-wrap container card">
                <div className="row user-info">
                    <div className="col l12">
                        <div className="col s12 m3 l2 xl2 user-pic">
                            <a
                                href="#"
                            >
                                <img
                                    src={require('../../img/photo.jpg')}
                                    alt="Морзе Наталія Вікторівна"
                                />
                            </a>
                        </div>
                        <div className="col s12 m9 l10 xl10">
                            <div className="col s12 m12 l12">
                                <h1 className='user-name'> Морзе Наталія Вікторівна </h1>
                                <p> (807 балів за 2017 рік). </p>
                            </div>
                            <div className="list-group col s12 m12 l6">
                                <div className="list-group-item">
                                    <div className="row-content">
                                        <h4 className="list-group-item-heading">Посилання</h4>
                                        <p className="list-group-item-text"></p>
                                        <div className="user-links">
                                            <a
                                                href="#"
                                                className="user-email"
                                                title="n.morze@kubg.edu.ua">
                                            </a>
                                            <a
                                                href="#"
                                                className="user-wiki"
                                                target="_blank"
                                                title="Wikipedia">
                                            </a>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row-content">
                                        <h4 className="list-group-item-heading">
                                            Профіль науковця
                                        </h4>
                                        <p className="list-group-item-text"></p>
                                        <div className="user-links">
                                            <a
                                                href="#"
                                                className="user-scholar"
                                                target="_blank"
                                                title="Scholar">
                                            </a>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group col s12 m12 l6">
                                <div className="list-group-item">
                                    <div className="row-content"><h4 className="list-group-item-heading">Підрозділ</h4>
                                        <p className="list-group-item-text"> Ректорат <br/>
                                            <small>
                                                Факультет інформаційних технологій та управління, Кафедра
                                                комп'ютерних наук і математики (Суміщення)
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row-content">
                                        <h4 className="list-group-item-heading">Посада</h4>
                                        <p className="list-group-item-text"> Проректор, <small>Професор кафедри
                                            (Суміщення)</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row-content">
                                        <h4 className="list-group-item-heading">
                                            Вчене звання /Науковий ступінь
                                        </h4>
                                        <p className="list-group-item-text">
                                            Доктор педагогічних
                                            наук. Професор, член-кореспондент НАПНУ.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="row collapsible">
                    <li
                        className="col s12 active"
                    >
                        <h2
                            className="part-title collapsible-header"
                        >
                            Додаткові відомості
                        </h2>
                        <div className="collapsible-body col m12">
                            <div className="col s12 m6">
                                <div className="">
                                    <div className="title-small">Освіта</div>
                                    Національний педагогічний університет імені М. Драгованова, 1978
                                </div>
                                <div className="">
                                    <div className="title-small">Перелік місць роботи</div>
                                    Національний університете біоресурсів і природокористування України,
                                    проректор<br/>Академія праці і соціальних відносин, проректор<br/>Національний
                                    педагогічний університет імені М.Драгоманова, доцент кафедри інформатики
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div className="">
                                    <div className="title-small">Теми дисертацій (захищених)</div>
                                    дисертація на здобуття наукового ступеня доктора педагогічних наук зі
                                    спеціальності 13.00.02 - теорія і методика навчання інформатики " Система
                                    методичної підготовки майбутніх вчителів інформатики в педагогічних
                                    університетах", 2003 р.
                                </div>
                                <div className="">
                                    <div className="title-small">Громадська активність</div>
                                    <span className="text-muted">не встановлено</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row">
                    <div className="col s12 content-group">
                        <h2>Науково-дослідницька діяльність</h2>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Індекси цитування Google Академії
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                            <tr>
                                                <th width="1%"><i className="material-icons"></i></th>
                                                <th>Бібліографічні посилання</th>
                                                <th>h-індекс</th>
                                                <th>i10-індекс</th>
                                                <th>Дата оновлення</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td id="scholar_references">1535</td>
                                                <td id="scholar_hindex">18</td>
                                                <td id="scholar_i10_index">36</td>
                                                <td> 2019.01.25 09:21:48</td>
                                                <td><a
                                                    href="https://scholar.google.com.ua/citations?user=b18TCTYAAAAJ&amp;hl=uk"
                                                    target="_blank" className="table-action"> Перейти на сторінку <i
                                                    className="material-icons">link</i> </a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Конференції (9)
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th width="1%">ID</th>
                                            <th>Назва</th>
                                            <th>Тема доповіді</th>
                                            <th>Місце проведення</th>
                                            <th>Документ, що засвідчує</th>
                                            <th>Дата проведення</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1316</td>
                                            <td>Міжнародна науково-практична конференція INTERNATIONAL CONFERENCES ON
                                                ITS 2016, ICEduTech 2016 AND STE 2016 RMIT University
                                            </td>
                                            <td>1. MOOCs – theoretical and practical aspects: comparison of selected
                                                research results: poland, russia, ukraine, and australia. 2. Educational
                                                robots in primary school teachers’ and students’ opinion about stem
                                                education for young learners
                                            </td>
                                            <td>Мельбурн, Австралія</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1316/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-12-08" className="text-muted"> 2016-12-08</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1312</td>
                                            <td>Міжнародна наукова конференція «Теоретичні та практичні аспекти
                                                дистанційного навчання» (DLCC-2016)
                                            </td>
                                            <td>Openness and quality of e-educational university environment</td>
                                            <td>Чешен, Польща</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1312/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-10-11" className="text-muted"> 2016-10-11</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1313</td>
                                            <td>Міжнародна наукова конференція «Теоретичні та практичні аспекти
                                                дистанційного навчання» (DLCC-2016)
                                            </td>
                                            <td>Teacher-student collaboration: challenges and opportunities</td>
                                            <td>Чешен, Польща</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1313/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-10-11" className="text-muted"> 2016-10-11</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1314</td>
                                            <td>Міжнародна наукова конференція «Теоретичні та практичні аспекти
                                                дистанційного навчання» (DLCC-2016)
                                            </td>
                                            <td>Robots in elementary school: some educational, legal and technical
                                                aspect
                                            </td>
                                            <td>Чешен, Польща</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1314/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-10-11" className="text-muted"> 2016-10-11</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1315</td>
                                            <td>Міжнародна наукова конференція «Теоретичні та практичні аспекти
                                                дистанційного навчання» (DLCC-2016)
                                            </td>
                                            <td>Collaboration in research activities: ict tools assessment</td>
                                            <td>Чешен, Польща</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1315/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-10-11" className="text-muted"> 2016-10-11</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1310</td>
                                            <td>Міжнародна науково-практична конференція « Відкрите електронне освітнє
                                                середовище сучасного університету»
                                            </td>
                                            <td>ВПРОВАДЖЕННЯ STEAM НАВЧАННЯ З ВИКОРИСТАННЯМ 3D ТЕХНОЛОГІЙ: МОДЕЛЮВАННЯ,
                                                СКАНУВАННЯ ТА ДРУК
                                            </td>
                                            <td>Київ, Україна</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1310/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-09-08" className="text-muted"> 2016-09-08</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1308</td>
                                            <td>Міжнародна науково-практична конференція DIVAI2016</td>
                                            <td>Communication in Education: ICT Tools Assessment, Recommended
                                                Applications for Making Presentations and Didactic Videos. Some Research
                                                Results;
                                            </td>
                                            <td>Штурово, Словаччина</td>
                                            <td><a
                                                href="http://eportfolio.kubg.edu.ua/data/conference/1308/document.pdf"
                                                target="_blank" className="file-pdf"> document.pdf </a></td>
                                            <td>
                                                <time dateTime="2016-05-05" className="text-muted"> 2016-05-05</time>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Дослідно-експериментальна робота (3)
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Назва дослідно-експериментальної роботи</th>
                                                <th>База (навчальний заклад)</th>
                                                <th>Вид участі</th>
                                                <th>Документ, що засвідчує</th>
                                                <th>Період реалізації</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Модель Столичного центру відкритої освіти в умовах розвитку
                                                    інформаційного суспільства
                                                </td>
                                                <td>СЗШ № 81</td>
                                                <td>Науковий керівник</td>
                                                <td><a
                                                    href="http://rg.kubg.edu.ua/data/dynamicdb/research_experimental_work/1/Reestr.pdf"
                                                    target="_blank" className="file-pdf"> Reestr.pdf </a></td>
                                                <td>2014-2021</td>
                                            </tr>
                                        <tr>
                                            <td>136</td>
                                            <td>«Розробка та впровадження електронних освітніх ресурсів у процесі
                                                навчання основ інформатики учнів початкової школи»
                                            </td>
                                            <td>Гімназія № 154, СЗШ № 245, СЗШ № 281, школа І ступеня № 310
                                                «Творчість»
                                            </td>
                                            <td>Науковий керівник</td>
                                            <td><a
                                                href="http://rg.kubg.edu.ua/data/dynamicdb/research_experimental_work/136/%D0%A0%D0%B5%D1%94%D1%81%D1%82%D1%80%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D1%85%20%D0%BA%D0%B5%D1%80%20%D1%96%20%D0%BA%D0%BE%D0%BD%D1%81%20%D0%94%D0%95%D0%A0%202018.pdf"
                                                target="_blank" className="file-pdf"> Реєстр наукових кер і конс ДЕР
                                                2018.pdf </a></td>
                                            <td>2018-2022</td>
                                        </tr>
                                        <tr>
                                            <td>154</td>
                                            <td>Розробка та впровадження електронних освітніх ресурсів у процесі
                                                навчання основ інформатики учнів початкової школи
                                            </td>
                                            <td>Гімназія № 154, СЗШ № 245, СЗШ № 281, школа І ступеня № 310
                                                «Творчість»
                                            </td>
                                            <td>Науковий керівник</td>
                                            <td><a
                                                href="http://rg.kubg.edu.ua/data/dynamicdb/research_experimental_work/154/%D0%A0%D0%B5%D1%94%D1%81%D1%82%D1%80%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D1%85%20%D0%BA%D0%B5%D1%80%20%D1%96%20%D0%BA%D0%BE%D0%BD%D1%81%20%D0%94%D0%95%D0%A0%202018.pdf"
                                                target="_blank" className="file-pdf"> Реєстр наукових кер і конс ДЕР
                                                2018.pdf </a></td>
                                            <td>2018-2023</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 content-group">
                        <h2>Професійний розвиток</h2>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Індекси цитування Google Академії
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th width="1%"><i className="material-icons"></i></th>
                                            <th>Бібліографічні посилання</th>
                                            <th>h-індекс</th>
                                            <th>i10-індекс</th>
                                            <th>Дата оновлення</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td id="scholar_references">1535</td>
                                            <td id="scholar_hindex">18</td>
                                            <td id="scholar_i10_index">36</td>
                                            <td> 2019.01.25 09:21:48</td>
                                            <td><a
                                                href="https://scholar.google.com.ua/citations?user=b18TCTYAAAAJ&amp;hl=uk"
                                                target="_blank" className="table-action"> Перейти на сторінку <i
                                                className="material-icons">link</i> </a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Проведення інноваційних заходів в Університеті чи під його брендом (2)
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Назва заходу</th>
                                            <th>Тип заходу</th>
                                            <th>Місце проведення</th>
                                            <th>Дата проведення</th>
                                            <th>Нарахований бал</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>690</td>
                                            <td>Відкрите освітнє е-середовище сучасного університету</td>
                                            <td>Міжнародна науково-практична конференція</td>
                                            <td>Київський університет імені Бориса Грінченка</td>
                                            <td><span className="text-muted">09.09.2016</span></td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>706</td>
                                            <td>Вплив трендів інформаційного суспільства на якість вищої освіти" - ТEI
                                                2016
                                            </td>
                                            <td>Міжнародний семінар для науково-педагогічних працівників вищих
                                                навчальних закладів
                                            </td>
                                            <td>Київський університет імені Бориса Грінченка</td>
                                            <td><span className="text-muted">15.04.2016</span></td>
                                            <td>10</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 content-group">
                        <h2>Викладацька діяльність</h2>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Індекси цитування Google Академії
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th width="1%"><i className="material-icons"></i></th>
                                            <th>Бібліографічні посилання</th>
                                            <th>h-індекс</th>
                                            <th>i10-індекс</th>
                                            <th>Дата оновлення</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td id="scholar_references">1535</td>
                                            <td id="scholar_hindex">18</td>
                                            <td id="scholar_i10_index">36</td>
                                            <td> 2019.01.25 09:21:48</td>
                                            <td><a
                                                href="https://scholar.google.com.ua/citations?user=b18TCTYAAAAJ&amp;hl=uk"
                                                target="_blank" className="table-action"> Перейти на сторінку <i
                                                className="material-icons">link</i> </a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Навчальні та методичні матеріали (22)
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th width="1%">ID</th>
                                            <th>Назва</th>
                                            <th>Рік</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>15932</td>
                                            <td> Зошит для практичних робіт та проектної діяльності з інформатики: навч.
                                                посіб. для 8 кл. загальноосвіт. навч. закл. <a
                                                    href="http://elibrary.kubg.edu.ua/id/eprint/15932" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2016-01-01" className="text-muted"> 2016</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15947</td>
                                            <td> Робочий зошит з інформатики. 5 клас: навч. посіб. для загальноосвіт.
                                                навч. закл. <a href="http://elibrary.kubg.edu.ua/id/eprint/15947"
                                                               target="_blank"> <i className="material-icons"></i> </a>
                                            </td>
                                            <td>
                                                <time dateTime="2016-01-01" className="text-muted"> 2016</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11424</td>
                                            <td> Зошит для практичних робіт та проектної діяльності з інформатики. 7
                                                клас. <a href="http://elibrary.kubg.edu.ua/id/eprint/11424"
                                                         target="_blank"> <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11416</td>
                                            <td> Перевірка предметних компетентностей. Інформатика, 3 кл. <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11416" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11418</td>
                                            <td> Перевірка предметних компетентностей. Інформатика, 4 кл. <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11418" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11419</td>
                                            <td> Перевірка предметних компетентностей. Інформатика, 5 кл. <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11419" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11420</td>
                                            <td> Перевірка предметних компетентностей. Інформатика, 6 кл. <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11420" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11421</td>
                                            <td> Перевірка предметних компетентностей. Інформатика, 7 кл. <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11421" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11413</td>
                                            <td> Робочий зошит з інформатики. 4 клас <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/11413" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2015-01-01" className="text-muted"> 2015</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6041</td>
                                            <td> Зошит для контролю знань з інформатики. 6 клас: навч. посіб. для
                                                загальноосвіт. навч. закладів <a
                                                    href="http://elibrary.kubg.edu.ua/id/eprint/6041" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2014-01-01" className="text-muted"> 2014</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6040</td>
                                            <td> Зошит для практичних робіт та проектної діяльності з інформатики. 6
                                                клас: навч. посіб. для загальноосвіт. навч. закладів <a
                                                    href="http://elibrary.kubg.edu.ua/id/eprint/6040" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2014-01-01" className="text-muted"> 2014</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6042</td>
                                            <td> Робочий зошит з інформатики. 6 клас: навч. посіб. для загальноосвіт.
                                                навч. закладів <a href="http://elibrary.kubg.edu.ua/id/eprint/6042"
                                                                  target="_blank"> <i className="material-icons"></i>
                                                </a></td>
                                            <td>
                                                <time dateTime="2014-01-01" className="text-muted"> 2014</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5791</td>
                                            <td> Сходинки до інформатики: інтегорваний курс з розвитку алгоритмічного,
                                                логічного та критичного мислення молодших школярів: методичний посібник
                                                для вчителя, 2 клас <a href="http://elibrary.kubg.edu.ua/id/eprint/5791"
                                                                       target="_blank"> <i
                                                    className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2014-01-01" className="text-muted"> 2014</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6038</td>
                                            <td> Зошит для контролю знань з інформатики. 5 клас: навч. посіб. для
                                                загальноосвіт. навч. закладів <a
                                                    href="http://elibrary.kubg.edu.ua/id/eprint/6038" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6039</td>
                                            <td> Зошит для практичних робіт та проектної діяльності з інформатики. 5
                                                клас: навч. посіб. для загальноосвіт. навч. закладів <a
                                                    href="http://elibrary.kubg.edu.ua/id/eprint/6039" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6046</td>
                                            <td> Курсова робота з методики навчання інформатики: методичні
                                                рекомендації <a href="http://elibrary.kubg.edu.ua/id/eprint/6046"
                                                                target="_blank"> <i className="material-icons"></i>
                                                </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6037</td>
                                            <td> Робочий зошит з інформатики. 5 клас: навч. посіб. для загальноосвіт.
                                                навч. закладів <a href="http://elibrary.kubg.edu.ua/id/eprint/6037"
                                                                  target="_blank"> <i className="material-icons"></i>
                                                </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6035</td>
                                            <td> Сходинки до інформатики: Робочий зошит №1 для учня 2 класу <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/6035" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6036</td>
                                            <td> Сходинки до інформатики: Робочий зошит №2 для учня 2 класу <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/6036" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2013-01-01" className="text-muted"> 2013</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6043</td>
                                            <td> Опорні конспекти з інформатики, 9 клас <a
                                                href="http://elibrary.kubg.edu.ua/id/eprint/6043" target="_blank"> <i
                                                className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2011-01-01" className="text-muted"> 2011</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6033</td>
                                            <td> Зошит з інформатики до підруч. для 9 кл. заг.-осв. закладів. Частина
                                                1 <a href="http://elibrary.kubg.edu.ua/id/eprint/6033" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2009-01-01" className="text-muted"> 2009</time>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6034</td>
                                            <td> Зошит з інформатики до підруч. для 9 кл. заг.-осв. закладів. Частина
                                                2 <a href="http://elibrary.kubg.edu.ua/id/eprint/6034" target="_blank">
                                                    <i className="material-icons"></i> </a></td>
                                            <td>
                                                <time dateTime="2009-01-01" className="text-muted"> 2009</time>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <ul className="collapsible">
                            <li>
                                <h3 className="collapsible-header">
                                    Затверджені робочі програми (7)
                                </h3>
                                <div className="collapsible-body">
                                    <table className="responsive-table striped highlight">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>ЕНК</th>
                                            <th>Форма навчання</th>
                                            <th>ОКР</th>
                                            <th>Реєстраційний номер</th>
                                            <th>Дата затвердження програми</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1194</td>
                                            <td>Методика викладання інформатики у вищій школі</td>
                                            <td>Денна</td>
                                            <td>Магістр</td>
                                            <td>1140</td>
                                            <td><span className="text-muted">22.10.2015</span></td>
                                        </tr>
                                        <tr>
                                            <td>3719</td>
                                            <td>Інноваційні методи,технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Заочна</td>
                                            <td>Магістр</td>
                                            <td>2898</td>
                                            <td><span className="text-muted">27.09.2016</span></td>
                                        </tr>
                                        <tr>
                                            <td>4051</td>
                                            <td>Інноваційні методи, технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Денна</td>
                                            <td>Магістр</td>
                                            <td>0316/17</td>
                                            <td><span className="text-muted">03.02.2017</span></td>
                                        </tr>
                                        <tr>
                                            <td>6244</td>
                                            <td>Інноваційні методи, технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Денна</td>
                                            <td>Бакалавр</td>
                                            <td>2473/17</td>
                                            <td><span className="text-muted">07.09.2017</span></td>
                                        </tr>
                                        <tr>
                                            <td>6245</td>
                                            <td>Інноваційні методи, технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Денна</td>
                                            <td>Магістр</td>
                                            <td>2474/17</td>
                                            <td><span className="text-muted">07.09.2017</span></td>
                                        </tr>
                                        <tr>
                                            <td>6864</td>
                                            <td>Інноваційні методи, технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Денна</td>
                                            <td>Магістр</td>
                                            <td>0299/18</td>
                                            <td><span className="text-muted">15.01.2018</span></td>
                                        </tr>
                                        <tr>
                                            <td>6865</td>
                                            <td>Інноваційні методи, технології та моніторинг якості електронного
                                                навчання
                                            </td>
                                            <td>Денна</td>
                                            <td>Магістр</td>
                                            <td>0300/18</td>
                                            <td><span className="text-muted">15.01.2018</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPortfolio;