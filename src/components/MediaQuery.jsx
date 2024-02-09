import styled from "styled-components";

function MediaQuery() {
    return (
        <Wrapper>
            <h1>Media Query</h1>
            <h2>Introduction to responsive Web Design</h2>
            <Container>
                <Box1 />
                <Box2 />
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    place-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

const Box1 = styled.div`
    width: 350px;
    height: 250px;
    background: indianred;
    border-radius: 20px;
`

const Box2 = styled.div`
    width: 350px;
    height: 250px;
    background: cornflowerblue;
    border-radius: 20px;
`

export default MediaQuery;