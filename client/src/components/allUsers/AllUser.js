import React from 'react';
import { Link } from "react-router-dom";
import { PreloaderSmall } from '../preloader';


const AllUser = (props) => {
    const {
        users,
        loading,
        currentPage,
        searchInput,
        onChange,
        changePage,
        allPges
    } = props;

    let userFilter;

    if(!loading) {
        userFilter = users.filter(item => ((new RegExp(searchInput,'i')).test(`${item.firstName} ${item.lastName} ${item.email}`)));
    }

    return (
        <div className="userPortfolio-wrap container card">

                <Search
                    searchInput={searchInput}
                    onChange={onChange}
                />

                <div className="row center-align">
                    {
                        loading
                            ? <PreloaderSmall/>
                            :
                            userFilter.length ?
                                userFilter
                                    // .slice((currentPage - 1) * 3, currentPage * 3)
                                    .map( user => {
                                        return (
                                            <UserCard
                                                key={user.id}
                                                id={user.id}
                                                userData={user}
                                            />
                                        )
                                    }) : "Нічого не знайдено"
                    }
                </div>
                <div className="row">
                    <div className="col s12 center-align ">
                        {
                            !loading &&
                                (!searchInput &&
                                        <Pagination
                                            currentPage={currentPage}
                                            changePage={changePage}
                                            allPage={users.length}
                                        />)
                        }
                    </div>
                </div>
        </div>
    );
};

const UserCard = (props) => {
    const { firstName, lastName, email } = props.userData;
    return (
        <div className="col s12">
            <div className="card valign-wrapper allUser-card">
                <div className="col s12 m6 valign-wrapper">
                    <img
                        className="circle"
                        src="https://lorempixel.com/100/190/nature/6"
                        width="100"
                        height="100"
                    />
                    <div className="allUser-text left-align">
                        <h5>{`${lastName} ${firstName}`}</h5>
                        <p>{email}</p>
                    </div>
                </div>
               <div className="col s12 m6 right-align">
                   <Link className='linkCancelToDashboard ' to={`/all-users/${props.id}`}>
                       <button
                           className='
                                #607d8b blue-grey
                                btn
                                waves-light
                                waves-effect
                            '
                       >Показати більше</button>
                   </Link>
               </div>
            </div>
        </div>
    )
};

const Search = (props) => {
    const { searchInput, onChange } = props;
    return (
        <div className="row valign-wrapper">
            <div className="col s6 right-align">
                <h6>Пошук за іменем або Email:</h6>
            </div>
            <div className="input-field col s6">
                <input
                    id="searchInput"
                    value={searchInput}
                    onChange={onChange}
                    type="text"
                    className="validate"
                />
                <label htmlFor="first_name">пошук</label>
            </div>
        </div>

    )
};

const Pagination = (props) => {
    const { currentPage, allPage } = props;


    return (
        <ul className="pagination">
            <li className="disabled">
                <Link to="#!"><i className="material-icons">chevron_left</i></Link>
            </li>
            <li className="active">
                <Link to="#!">{currentPage}</Link>
            </li>
            <li className="waves-effect">
                <Link to="#!">2</Link>
            </li>
            <li className="waves-effect">
                <Link to="#!">3</Link>
            </li>
            <li className="waves-effect">
                <Link to="#!">4</Link>
            </li>
            <li className="waves-effect">
                <Link to="/all-users">{allPage}</Link>
            </li>
            <li className="waves-effect">
                <Link to="#!"><i className="material-icons">chevron_right</i></Link>
            </li>
        </ul>
    )
};

export default AllUser;
