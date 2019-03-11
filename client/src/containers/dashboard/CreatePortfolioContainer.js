import React, { Component } from "react";

import {connect} from "react-redux";
import CreatePortfolio from "../../components/dashboard/CreatePortfolio";
import {withRouter} from "react-router-dom";
import { postNewData } from "../../actions/authActions";


class CreatePortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            dateOfBirth: '',
            photo: null,
            employment: '',
            position: '',
            bidSize: '',
            subsection: '',
            department: '',
            academicStatus: '',
            degree: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        (function () {
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
                    weekdaysAbbrev: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С']
                },
                container: 'body',
                selectMonths: true,
                selectYears: 15,
                yearRange: [1935, 2030]
            });

        })()
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit() {
        console.log('onSubmit');
        const { id } = this.props.auth.user;
        const {
            firstName, lastName, middleName,
            email, employment, position, bidSize,
            subsection, department, academicStatus, degree
        } = this.state;

        const newData = {
            userId: id,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            email: email,
            employment: employment,
            position: position,
            bidSize: bidSize,
            subsection: subsection,
            department: department,
            academicStatus: academicStatus,
            degree: degree
        };


        this.props.postNewData(newData, this.props.history);
    }

    render() {
        return (
            <CreatePortfolio
                fieldsData={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { postNewData }
)(withRouter(CreatePortfolioContainer));
