import React from "react";
import CardData from "../Data";
import Cards from "./Card";
import Container from "react-bootstrap/esm/Container";
import SideBar from "./SideBar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Shop({handleClick}){
    return(
        <Container>
            <Row>
                <Col><SideBar/></Col>
                <Col>
                <Row >
                {CardData.map((item)=>(
                        <Cards className="col-xs-1" key={item.id} item={item} handleClick={handleClick}/>
                    ))}
                </Row>                              
                </Col>
            </Row>
        </Container>
    )     
};
export default Shop;