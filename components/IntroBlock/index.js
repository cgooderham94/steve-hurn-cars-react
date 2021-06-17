import BasicType from './types/Basic';
import TextColumnType from './types/TextColumn';

const IntroBlock = ({ introBlock }) => {
    let blockTypeEl = null;
    let typeHandle = introBlock[0] ? introBlock[0].typeHandle : '';

    if (typeHandle == 'textColumns') {
        blockTypeEl = <TextColumnType introBlock={introBlock}/>;
    } else if (typeHandle == 'basic') {
        blockTypeEl = <BasicType introBlock={introBlock}/>;
    }

    return blockTypeEl;
};

export default IntroBlock;