import React from 'react';
import Deletebutton from './Deletebutton';

const TableBody = (props) => {
    
    return (
        <tbody>
        
      {props.info.map((item =>
      <tr><td>{item.name}</td>
          <td>{item.job}</td>
          <td><Deletebutton/></td>
      
      </tr>
  ))}

      </tbody>
    );
};

export default TableBody;