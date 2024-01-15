import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Dropdown, Input } from 'antd'
import React, { useRef, useState } from 'react'

const items = [
    {
        label: <div className='dropdownContent__child itemAdmin'>
            <span>Admin</span>
            <span>Can invite and manage new users</span>
        </div>,
        key: "1"
    },
    {
        label: <div className='dropdownContent__child itemMember'>
            <span>Member</span>
            <span>Can add and edit content</span>
        </div>,
        key: "2"
    }
];

export default function InviteMember() {
    const [selectedItem, setSelectedItem] = useState("Admin");
    const inputEl = useRef(null);

    // todo: handle item selection in dropdown menu
    const handleSelectedItem = (item) => {
        console.log('item', item);
        if (item.key === "2") {
            setSelectedItem("Member");
        } else {
            setSelectedItem("Admin")
        }
    };

    // todo: handle "add another" button
    const handleAdd = () => {
        
    }

    return (
        <div className='inviteMember customCom'>
            <div className='inviteMember__left partLeft'>
                <div className='inviteMember__content content'>
                    <div className='logo'>
                        <img src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/logos/monday.png' alt='logo-monday-dev' />
                    </div>
                    <div className='inviteMember__addTeam contentMiddle'>
                        <h1 className='title mb-8'>Who else is on your team?</h1>
                        <div className='addTeam__content'>
                            <p className='addTeam__text mb-2'>Invite with link (anyone with a @ email)</p>
                            <div className='addTeam__inputGroups' ref={inputEl}>
                                <div className='addTeam__item mb-3 flex'>
                                    <Input className='inputItem h-10 w-9/12 rounded rounded-r-none' placeholder='https://india-richard.monday.com/users/sign_up?invitationId=35034775384424395000' />
                                    <Button className='btnCopy rounded rounded-l-none h-10'>
                                        <FontAwesomeIcon icon={faCopy} style={{fontSize: "18px"}} />
                                        Copy
                                    </Button>
                                </div>
                                <div className='addTeam__item mb-3 flex'>
                                    <Input className='inputItem h-9 w-9/12 rounded rounded-r-none' placeholder='Add email here' />
                                    <div className='btnItem'>
                                        <Dropdown.Button
                                            className='btnItem__dropdown'
                                            icon={<FontAwesomeIcon icon={faChevronDown} width={"11px"} />}
                                            menu={{
                                                items: items.map((item) => ({
                                                    ...item,
                                                    onClick: () => handleSelectedItem(item),
                                                }))
                                            }}
                                            trigger={['click']}
                                        >
                                            {selectedItem}
                                        </Dropdown.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="addTeam__btnAdd">
                                <Button className='item__btnAdd' onClick={handleAdd}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    Add another
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='inviteMember__footer formFooter'>
                        <Button className='btnFooter btnRemind'>
                            <a>Remind me later</a>
                        </Button>
                        <Button className='btnFooter btnInvite'>
                            <a>Invite your team</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='inviteMember__right partRight partImg' style={{ background: "#00CA72" }}>
                <img src='https://dapulse-res.cloudinary.com/image/upload/platform-products-signup/dev/invite_dev.png' alt='invite-member-img' />
            </div>
        </div>
    )
}
