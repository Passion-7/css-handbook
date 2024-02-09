import styled, {keyframes} from "styled-components";

function Keyframe() {
    return (
        <div>
            <Title>Welcome to CodeSandbox</Title>
            <h2>Start editing to see something happen!</h2>
        </div>
    );
}

const textFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`

const Title = styled.h1`
    font-weight: bold;
    animation-name: ${textFade};
    animation-duration: 1s;
    opacity: 0;
`

export default Keyframe;