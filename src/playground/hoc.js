
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
   <div>
      <h1>Info</h1>
      <p>The Info is : {props.info} </p>
   </div>
);

const widthAdminWarning = (WrappedComponent) =>{
   return (props) => (
      <div>
         {props.isAdmin && <p>This is private info</p>}
         <WrappedComponent {...props} />
      </div>
   )
}

const AdminInfo = widthAdminWarning(Info);



ReactDOM.render(<AdminInfo isAdmin={true} info='there are details' />,document.getElementById('app'))