import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Checkbox } from 'antd'
import React from 'react'

const plainOptions = ["TV / Streaming service", "Billboard / Public transit ad", "Audio ad (Podcast, Spotify)", "YouTube ad", "LinkedIn", "Search engine (Google, Bing, etc.)", "Software review sites", "Consultant", "Friend / Colleague", "Social media (Facebook, Instagram, Reddit, etc.)", "Other"];

export default function Question2() {
    // todo: onchange for check box values
    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    }

    // todo: render check box options
    let renderCheckBox = () => {
        return (
            <>
                <Checkbox.Group 
                    className='flowQues2__optionGroup'
                    onChange={onChange}>
                    {plainOptions.map((item, index) => {
                        return <Checkbox className='btnCheckBox mt-4' value={index}>{item}</Checkbox>
                    })}
                </Checkbox.Group>
            </>
        );
    };

    return (
        <div className='flowQues2 customCom'>
            <div className='flowQues2__left partLeft'>
                <div className='flowQues2__content content'>
                    <div className='logo'>
                        <img src='https://cdn.monday.com/images/logos/logo-full-big.png' alt='logo-monday' />
                    </div>
                    <div className='flowQues2__checkBoxGroups contentMiddle'>
                        <h1 className='title mb-3'>One last question, how did you hear about us?</h1>
                        {renderCheckBox()}
                    </div>
                    <div className='flowQues2__footer formFooter'>
                        <Button className='btnFooter btnBack'>
                            <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: "12px"}} />
                            <a>Back</a>
                        </Button>
                        <Button className='btnFooter btnContinue'>
                            <a>Continue</a>
                            <FontAwesomeIcon icon={faChevronRight} style={{fontSize: "12px"}} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flowQues2__right partRight partImg' style={{ background: "#FFCC00" }}>
                <img src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png' alt='flow-ques-2-img' />
            </div>
        </div>
    )
}
