//@flow
import React from 'react';
import Swipeable from 'react-swipeable';
import styled from 'styled-components';
import {media} from '../../theme/media';

const Item = styled(Swipeable)`
    transform: translate3d(0, 0, 0);
    will-change: left, opacity;
    overflow: hidden;
    position: absolute;
    width: 300px;
    height: 300px;
    transition: left .5s, opacity .7s;
    ${media.desktop`
        width: 160px;
        height: 160px;`}
    &.level-2 {
        z-index: 0;
        left: 200%;
        ${media.desktop`
            left: ${930 - 173}px;`};
        }
    }
    &.level-1 {
        left: 100%;
        z-index: 0;
        ${media.desktop`
            left: ${930 - (173 * 2) - 13}px;`}
        }
    }
    &.level0 {
        z-index: 1;
        left: 0;
        ${media.desktop`
            left: ${930 - (173 * 3) - 26}px;`};
        }
    }
    &.level1 {
        z-index: 0;
        left: -100%;
        ${media.desktop`
            left: ${930 - (173 * 4) - 39}px;`};
        }
    }
    &.level2 {
        z-index: 0;
        left: -200%;
        ${media.desktop`
            left: 13px;`};
        }
    }
    &.left-enter {
        opacity: 0;
        left: 100%;
        ${media.desktop`
            left: -100%;`};
    }

    &.left-enter.left-enter-active {
        left: 100%;
        ${media.desktop`
            left: 0%;`};
    }

    &.left-leave {
        opacity: 1;
        left: 110%;
        ${media.desktop`
            left: 110%;`};
    }

    &.left-leave.left-leave-active {
        left: 110%; 
        opacity: 0;
        ${media.desktop`
            left: 110%;`};
    }

    &.right-enter {
        opacity: 0;
        left: 100%;
        ${media.desktop`
            left: 110%;`};
    }

    &.right-enter.right-enter-active {
        left: 100%;
        ${media.desktop`
            left: 100%;`};
    }

    &.right-leave {
        left: -110%;
        opacity: 1;
        ${media.desktop`
            left: -30%;`};
    }

    &.right-leave.right-leave-active {
        left: -110%;
        opacity: 0;
        ${media.desktop`
            left: -30%;`};
    }
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
`;

type PropTypes = {
    content: {
        webformatURL: string,
        previewURL: string,
        tags: string
    },
    level: number,
    moveLeft: () => void,
    moveRight: () => void
}

const CarouselItem = (props: PropTypes) => {

    const {content: {webformatURL, previewURL, tags}, level, moveRight, moveLeft} = props;

    return (
        <Item className={`level${level}`}
            onSwipedRight={moveLeft}
            onSwipedLeft={moveRight}>
            <Image src={previewURL} alt={tags} />
        </Item>
    );
};

export default CarouselItem;
