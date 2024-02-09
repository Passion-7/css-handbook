import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ComponentPreviews, useInitial} from "./dev";
import {DevSupport} from "@react-buddy/ide-toolbox";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);
