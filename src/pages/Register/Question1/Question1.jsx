import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Radio } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const questionGroups = {
    firstQues: ["Work", "Personal", "School", "Nonprofits"],
    secondQues: {
        workQues: ["Business owner", "Team leader", "Team member", "Freelancer", "Director", "C-Level", "VP"],
        schoolQues: ["Undergraduate student", "Graduate student", "Faculty member", "Other"],
        nonProQues: ["Board member", "Executive", "Employee", "Volunteer", "IT staff", "Other"]
    }
};

export default function Question1() {
    const [value, setValue] = useState(null);
    const [valueSecond, setValueSecond] = useState(null);

    // todo: onchange for radio group
    const onChangeFirst = (e) => {
        setValue(e.target.value);
    };

    // todo: onchange for second questions
    const onChangeSecond = (e) => {
        setValueSecond(e.target.value);
    }

    // todo: render second questions group 
    let renderSecondQuestion = (questionOption) => {
        console.log("value second", valueSecond);
        return (<div className='flowQues1__secondQues mt-16'>
            <h1 className='title mb-2'>What best describes your current role?</h1>
            <Radio.Group className='flowQues1__radioGroups' onChange={onChangeSecond} value={valueSecond}>
                {questionOption.map((item, index) => {
                    return <Radio className='btnRadio mt-4' value={index}>{item}</Radio>
                })}
            </Radio.Group>
        </div>);
    };

    // todo: render questions form
    let renderFormQuestion = () => {
        console.log("value first", value);
        return (
            <>
                <div className='flowQues1__firstQues'>
                    <h1 className='title mb-2'>Hey there, what brings you here today?</h1>
                    <Radio.Group className='flowQues1__radioGroups' onChange={onChangeFirst} value={value}>
                        {questionGroups.firstQues.map((item, index) => {
                            return <Radio className='btnRadio mt-4' value={index}>{item}</Radio>
                        })}
                    </Radio.Group>
                </div>

                {/* Render second questions group */}
                {value === 0 && renderSecondQuestion(questionGroups.secondQues.workQues)}
                {value === 2 && renderSecondQuestion(questionGroups.secondQues.schoolQues)}
                {value === 3 && renderSecondQuestion(questionGroups.secondQues.nonProQues)}
            </>
        )
    }

    return (
        <div className='flowQues1 customCom'>
            <div className='flowQues1__left partLeft'>
                <div className='flowQues1__content content'>
                    <div className='flowQues1__logo logo'>
                        <img src='https://cdn.monday.com/images/logos/logo-full-big.png' alt='logo-monday' />
                    </div>
                    <div className='flowQues1__radioGroups contentMiddle'>
                        {renderFormQuestion()}
                    </div>
                    {value !== 1 && valueSecond === null ? (<div className='flowQues1__footer formFooter'>
                        <Button className='btnFooter btnContinue'>
                            <NavLink>Continue</NavLink>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }} />
                        </Button>
                    </div>) : (<div className='flowQues1__footer formFooter'>
                        <Button className='btnFooter btnContinue btnValid'>
                            <NavLink to={"/flow-question-2"}>Continue</NavLink>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }} />
                        </Button>
                    </div>)}
                </div>
            </div>
            <div className='flowQues1__right partRight partImg'>
                <img src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png' alt='flow-ques-1-img' />
            </div>
        </div>
    )
}
