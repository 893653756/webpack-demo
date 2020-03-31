// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';

// ReactDOM.render(<App />, document.getElementById('root'))

async function getComponent() {
    const { join } = await import(/* webpackChunkName:"app", webpackPrefetch: true */ './app.js');
    const element = document.createElement('div');
    element.innerHTML = join(['dell', 'lee'], '-');
    return element;
}

document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element);
    })
})