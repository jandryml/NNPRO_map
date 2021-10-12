import React from 'react'
import {Map, PathLayer, Path, CompassControl, KeyboardControl, MouseControl} from 'react-mapycz'

export const MyComponent = () => (

    <Map width="1600px" height="800px" center={{'lat': 50.033676, 'lng': 15.761882}} zoom={12}>
        <CompassControl/>
        <KeyboardControl/>
        <MouseControl zoom={true} wheel={true} pan={true}/>
        <PathLayer>
            <Path width={3} coords={[{'lat': 50.033676, 'lng': 15.761882}, {
                'lat': 51.033676,
                'lng': 20.761888
            }, {'lat': 50.033676, 'lng': 20.761888}]} dynamicRoute={true}/>
        </PathLayer>
    </Map>
)