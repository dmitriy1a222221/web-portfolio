import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user)

    return (
      <div className="container card dash-wrap">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Це Ваш акаунт,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Тепер Ви можете створити власне Е-Портфоліо
              </p>
            </h4>
            <div className='dash-btn-wrap'>
              <Link to='/create-portfolio'>
                <button
                    className="dash-btn-submit
                  btn btn-large
                  waves-effect
                  waves-light
                  #607d8b blue-grey"
                >
                  Створити портфоліо
                </button>
              </Link>

            <Link to='/review-portfolio'>
                <button
                    className="dash-btn-submit
              btn btn-large
              waves-effect
              waves-light
              #607d8b blue-grey"
                >
                    Переглянути портфоліо
                </button>
            </Link>

              <button
                  onClick={this.onLogoutClick}
                  className="dash-btn-submit
                  btn
                  waves-effect
                  waves-light
                  #607d8b blue-grey"
              >
                Logout
              </button>
            </div>
          </div>
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
