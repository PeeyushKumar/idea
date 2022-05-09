import { useState } from 'react';

import { auth } from '../../firebase';

import './UserPanel.css'

const UserPanel = ({handleLogout}) => {

    const [openedPanel, setOpenedPanel] = useState(null)

    const handlePanelToggle = panel => {
        setOpenedPanel(prev => prev === panel ? null : panel);
    }

    return(
        <div className='user-panel'>

            <h1 onClick={() => handlePanelToggle('account')}>{auth.currentUser.displayName}</h1>
            
            {   
                openedPanel &&
                <div className={`${openedPanel}-panel`}>
                    <p className='panel-option' onClick={handleLogout}>Sign out</p>
                </div>   
            }
        </div>
    )
}

export default UserPanel;