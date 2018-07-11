import React from 'react';
import { WeatherDashboard } from './Weather/WeatherDashboard';

const App = () => (
    <div>
        <div className="mt-lg-5">
            <div className="col-lg-6 p-0 mx-auto">
                <WeatherDashboard />
            </div>       
        </div>
    </div>
);

export default App;