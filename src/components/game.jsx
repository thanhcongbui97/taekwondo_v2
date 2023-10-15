import React from 'react';
import data from "./work.json";
import { Container, Row, Col } from 'react-bootstrap';
import WorkIcon from '@material-ui/icons/Work';
import {Fade} from 'react-reveal';

const Game = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Fade left big cascade>
            <ul className="game">
            {
                data.map(item => {
                    return (
                      <li className="game-item" key={item.id}>
                        <div className="game-badge">
                          <WorkIcon className="glyphicon glyphicon-off" />
                        </div>
                        <div className="game-panel">
                          <div className="game-heading">
                            <div className="game-heading-div">
                              <h4 className="game-title">{item.company}</h4>
                              <span> | </span>
                              <p style={{fontSize:"17px",opacity:"0.4"}}>{item.date}</p>
                            </div>
                            <p className="text">Lịch tập</p>
                          </div>
                          <div className="game-body">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </li>
                    );
                })
            }
            </ul>
            </Fade>
          </Col>
        </Row>
      </Container>
    );
}

export default Game;
