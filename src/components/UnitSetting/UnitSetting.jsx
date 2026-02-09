import React from 'react';
import './UnitSetting.css';

function UnitSetting({label,metricUnit,imperialUnit}) {
    return (
        <div className="unit-setting">
            <p>{label}</p>
            <p>{metricUnit}</p>
            <p>{imperialUnit}</p>
        </div>

    )
}

export default UnitSetting;