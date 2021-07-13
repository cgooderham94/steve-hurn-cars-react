import BasicType from './types/Basic';
import TextColumnType from './types/TextColumn';

const IntroBlock = ({ introBlock }) => {
    let blockTypeEl = null;
    
    if (introBlock?.length) {
        let introBlockContent = introBlock[0];
        let typeHandle = introBlockContent.typeHandle;

        if (typeHandle == 'textColumns') {
            blockTypeEl = <TextColumnType introBlock={introBlockContent}/>;
        } else if (typeHandle == 'basic') {
            blockTypeEl = <BasicType introBlock={introBlockContent}/>;
        }
    }

    return blockTypeEl;
};

export default IntroBlock;