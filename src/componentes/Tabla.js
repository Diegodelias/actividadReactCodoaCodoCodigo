import React, { Component } from 'react';
import Deletebuttom from './Deletebutton';
import Tablehead from './Tablehead';
import Tablebody from './Tablebody';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = [{
          name: "Luis",
          job: "Programador",
         },{
            name: "Noelia",
            job: "Profesora",
           },{
            name: "Ada",
            job: "Cientifica",
           }];
      }
    
    render() {
        return (
            // <div className="tabla-container">
            <Container>
             
            <Table hover>
            <Tablehead/>
            <Tablebody info = {this.state}/>
            </Table>  
         
            </Container>

            // </div>
        );
    }
}

export default Tabla;