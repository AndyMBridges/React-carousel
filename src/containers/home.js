//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import CarouselSelectors from '../selectors/images';
import {loadImages} from '../actions/images';
import {Loading} from '../components/Loading';
import Carousel from '../components/carousel';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

type PropTypes = {
    getImages: Array<{
        webformatURL: string,
        previewURL: string,
        tags: string
    }>,
    loadImages: () => void,
}

class Home extends Component<PropTypes> {

    componentDidMount() {
        this.props.loadImages();
    }

    render() {

        const {getImages} = this.props;

        return (
            <Wrapper>
                {this.props.getImages && this.props.getImages.length > 0 ?
                    <Carousel images={getImages}/> : <Loading />}
            </Wrapper>
        );

    }

}

const mapStateToProps = state => {

    return {
        getImages: CarouselSelectors.getImages(state)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        loadImages: () => dispatch(loadImages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
