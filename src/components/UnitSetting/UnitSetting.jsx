import React from 'react';
import './UnitSetting.css';

function UnitSetting({label,unitSetting,metricUnit,imperialUnit, isBorderBottom=false}) {

    return (
        <div className={isBorderBottom ? "unit-setting border-bottom" : "unit-setting"}>
            <p className="unit-setting__label">{label}</p>
            <div className="unit-setting__unit">
                <p>{metricUnit}</p>
                {unitSetting==="metric" && <img src="/icon-checkmark.svg" alt="icon checkmark" />}
            </div>
            <div className="unit-setting__unit">
                <p>{imperialUnit}</p>
                {unitSetting==="imperial"&&<img src="/icon-checkmark.svg" alt="icon checkmark" />}
            </div>
        </div>

    )
}

export default UnitSetting;