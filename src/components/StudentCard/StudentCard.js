import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import { StudentContext } from '../../providers/StudentProvider/StudentProvider';
import Grades from '../Grades/Grades';
import StudentTags from '../StudentTags/StudentTags';
import './StudentCard.scss';

const StudentCard = () => {
    const student = useContext(StudentContext);
    const { id, firstName, lastName, pic, email, company, skill, grades } = student;
    let buttons = [faPlusSquare, faMinusSquare];
    const [btnNum, setBtnNum] = useState(0);

    function onClickPlusMinus() {
        let i = (btnNum + 1) % 2;
        setBtnNum(i);
        document.getElementById(`grades-div-${id}`).style.display = i ? "block" : "none";
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card mt-3 mb-3" id="student-card">
                <div className="row m-1">
                    <div className="col-sm-3 d-flex justify-content-center pt-3">
                        <img src={pic} alt={`${firstName} ${lastName}'s`} />
                    </div>
                    <div className="card-body row col-sm-7 m-1">
                        <div className="col-9">
                            <h5 className="card-title" id="student-card-title">{firstName} {lastName}</h5>
                            <div className="card-text">
                                Email: {email}<br />
                                Comapny: {company}<br />
                                Skill: {skill}<br />
                                {/* calculating avg grade = grades.reduce/grades.length */}
                                Average: {grades.reduce((acc, curr) => {
                                    return parseFloat(acc) + parseFloat(curr);
                                }) / grades.length}%
                            </div>
                            <Grades />
                            <StudentTags />
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <FontAwesomeIcon id="btn-ico" icon={buttons[btnNum]} size='2x' onClick={onClickPlusMinus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;