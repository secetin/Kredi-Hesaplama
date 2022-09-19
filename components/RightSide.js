
import React, { Component } from 'react';
import {Button, ButtonGroup, Col} from 'react-bootstrap';


class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
                <h4>Ödenecek Toplam Tutar</h4>
                <span  className="totalAmountDisplay">{this.props.amount} {this.props.currancy}</span>

                <h4>Aylık Ödeme</h4>
                <span className="monthlyInstDisplay">{this.props.monthly} {this.props.currancy}</span>

                <h4>Faiz Oranı</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                <h4>Kredi Geçmişi</h4>

                <ButtonGroup justified>
                    <Button   bsStyle="primary" id="Excellent" onClick={this.props.btnOnClick} >Harika</Button>
                    <Button   bsStyle="primary" id="Good" onClick={this.props.btnOnClick} >İyi</Button>
                    <Button   bsStyle="primary" id="Fair" onClick={this.props.btnOnClick}>Orta</Button>
                </ButtonGroup>

            </Col>

        )
    }
}

export default RightSide;