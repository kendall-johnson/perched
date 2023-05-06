import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-v7j6soccs4qn4xcj.us.auth0.com'
      clientId='Rb7A0XoSl0jPtAa88IJzqCujkTpPqTle'
      authorizationParams={{
        redirect_uri: 'http://localhost:5173',
        audience: "https://dev-v7j6soccs4qn4xcj.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
