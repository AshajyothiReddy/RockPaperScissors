import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const RulesPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="popup-image"
            />
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine className="cross-icon" />
            {/* */}
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default RulesPopUp
