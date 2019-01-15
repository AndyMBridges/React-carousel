//@flow
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import {media} from '../../theme/media';
import CarouselItem from './Item';
import arrowIcon from '../../images/arrow.svg';

const Arrow = styled.button`
    width: 50px;
    height: 100px;
    background-color: rgba(255,255,255,0.7);
    border: 0;
    z-index: 3; 
    color: #FFF;
    border-radius: ${props => props.direction === 'prev' ?
        '0 50px 50px 0' : '50px 0 0 50px'};
    cursor: pointer;
    position: absolute;
    left: ${props => props.direction === 'prev' && 0};
    right: ${props => props.direction === 'next' && 0};
    margin-left: 0;
    margin-right: 0;
    top: 50%;
    margin-top: -50px; 
    text-indent: 100px;
    overflow: hidden;
    font-size: 22px;
    &:after {
        content: '';
        background-image: url(${arrowIcon});
        background-repeat: no-repeat; 
        transform: ${props => props.direction === 'prev' && 'rotate(180deg)'};
        width: 40px;
        height: 40px;
        position: absolute;
        left: ${props => props.direction === 'prev' ? '-10px' : '20px'};
        top: 50%;
        background-size: contain;
        margin-top: -20px;
    }
    ${media.desktop`
        position: relative;
        background-color: #2C73A1;
        border-radius: ${props => props.direction === 'prev' ?
        '5px 0 0 5px' : '0 5px 5px 0'};
        margin: 0 10px;
        width: 100px;
        height: 40px;
        text-indent: 0;
        transition: .2s linear;
        &:hover {
            background-color: #4f7c9a;
        }
        &:after {
            display: none;
        }
        `};
`;

const Container = styled.div`
    position: relative;
    text-align: center;
    width: 300px;
    margin: 0 auto;
    ${media.desktop`
        width: 100%;`};
    .Carousel__container {
        height: 300px;
        display: flex;
        width: 100%; 
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        width: 300px;
        ${media.desktop`
            height: 220px;
            width: 930px;
            max-width: 930px;`};
    }
`;

type PropTypes = {
    images: Array<{
        webformatURL: string,
        previewURL: string,
        tags: string
    }>
}

type StateTypes = {
    active: number,
    direction: string
}

class Carousel extends Component<PropTypes, StateTypes> {

    state = {
        active: 0,
        direction: ''
    };

    // Generate items for carousel
    generateItems = () => {
        const items = [];
        let level;

        // Set index to -2 to allow for items both sides of center and provide negative class indentifer
        for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = i;

            // Logic to handle negative index (-2 by default)
            if (i < 0) {
                index = this.props.images.length + i;
            } else if (i >= this.props.images.length) {
                index = i % this.props.images.length;
            }
            level = this.state.active - i;

            // Push each item to the carousel array
            // Render this inside the ReactCSSTransitionGroup wrapper
            // Add/remove classes on DOM enter/exit
            items.push(<CarouselItem
                key={index}
                content={this.props.images[index]}
                level={level}
                moveLeft={this.leftClick}
                moveRight={this.rightClick}
            />);
        }
        return items;
    }

    // Handle left click
    // Update active state and direction
    leftClick = () => {
        this.setState({
            active: this.state.active - 1 < 0 ? this.props.images.length - 1 : this.state.active - 1,
            direction: 'left'
        });
    }

    // Handle right click
    // Update active state and direction
    rightClick = () => {
        this.setState({
            active: (this.state.active + 1) % this.props.images.length,
            direction: 'right'
        });
    }

    render() {

        return (
            <Container>
                <ReactCSSTransitionGroup
                    transitionName={this.state.direction}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                    className="Carousel__container"
                >
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <Arrow
                    tabIndex="0"
                    direction='prev'
                    onKeyPress={this.leftClick}
                    onClick={this.leftClick}>
                    Prev
                </Arrow>
                <Arrow
                    tabIndex="0"
                    direction='next'
                    onKeyPress={this.rightClick}
                    onClick={this.rightClick}>
                    Next
                </Arrow>
            </Container>
        );
    }
}

export default Carousel;
