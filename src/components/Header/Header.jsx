import React from 'react';
import {useState} from 'react';
import './Header.css';
import UnitSetting from '/src/components/UnitSetting/UnitSetting.jsx'

function Header({unitSetting,switchUnitSetting=null}) {
    const [isSubmenuHidden,setIsSubmenuHidden]=useState(true);

    function toggleUnitSettings() {
        switchUnitSetting();
        setIsSubmenuHidden(true);
    }

    return (
        <div className="container__header">
            <img src="/logo.svg" alt="weather logo" />
            <button className="icon-btn dropdown-btn" onClick={() => setIsSubmenuHidden(!isSubmenuHidden)}>
                <img src="/icon-units.svg" alt="units icon" />
                <p>Units</p>
                <img src="/icon-dropdown.svg" alt="dropdown icon" />
            </button>
            {!isSubmenuHidden&&
                <>
                    <div className="unit-settings">
                    <button className="transparent-btn" onClick={toggleUnitSettings}>{unitSetting==="metric"? "Switch to imperial":"Switch to metric"}</button>
                    <UnitSetting
                        isBorderBottom={true}
                        label={"Temperature"}
                        unitSetting={unitSetting}
                        metricUnit={`Celsius \u00BAC`}
                        imperialUnit={`Fehrenheit \u00BAF`} />
                    <UnitSetting
                        isBorderBottom={true}
                        label={"Wind Speed"}
                        unitSetting={unitSetting}
                        metricUnit={`km/h`}
                        imperialUnit={`mph`} />
                    <UnitSetting
                        label={"Precipitation"}
                        unitSetting={unitSetting}
                        metricUnit={`Millimiters (mm)`}
                        imperialUnit={`Inches (in)`} />
                    </div>

                    <div className="wrapper_unit-settings" onClick={() => setIsSubmenuHidden(true)}>
                    </div>
                </>
            }

        </div>

    )
}

export default Header;