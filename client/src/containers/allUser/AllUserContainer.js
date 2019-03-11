import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AllUser from '../../components/allUsers/AllUser';
import {getAllUsers} from "../../actions/allUserActions";


class AllUsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            currentPage: 1
        };

        this.onChange = this.onChange.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    changePage(e, data) {
        this.setState({currentPage: data.activePage})
    }

    render() {
        const { searchInput } = this.state;
        const { limit, currPage, allPages, totalUsers } = this.props;
        const users = this.props.allUser;
        const loading = this.props.loading;

        return (
           <AllUser
               users={users}
               loading={loading}
               currentPage={currPage}
               allPges={allPages}
               searchInput={searchInput}
               onChange={this.onChange}
               changePage={this.changePage}
           />
        );
    }
}

AllUsersContainer.propTypes = {
    allUser: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired,
    currPage: PropTypes.number.isRequired,
    allPages: PropTypes.number.isRequired,
    totalUsers: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    allUser: state.allUser.users,
    limit: state.allUser.limit,
    currPage: state.allUser.currPage,
    allPages: state.allUser.allPages,
    totalUsers: state.allUser.totalUsers,
    loading: state.allUser.loading
});

export default connect(
    mapStateToProps,
    { getAllUsers }
)(AllUsersContainer);