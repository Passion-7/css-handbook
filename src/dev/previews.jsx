import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {StyledComponents} from "../components/StyledComponents";
import GridLayout from "../components/GridLayout";
import MediaQuery from "../components/MediaQuery";
import Keyframe from "../components/Keyframe";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/StyledComponents">
                <StyledComponents/>
            </ComponentPreview>
            <ComponentPreview path="/GridLayout">
                <GridLayout/>
            </ComponentPreview>
            <ComponentPreview path="/MediaQuery">
                <MediaQuery/>
            </ComponentPreview>
            <ComponentPreview path="/Keyframe">
                <Keyframe/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;