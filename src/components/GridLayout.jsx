import styled from "styled-components";

function GridLayout() {
    return (
        <div><h1>Grid Layout</h1>
            <h2>The best way to create a beautiful and responsive layout</h2>
            <GridWrapper>
                {[...Array(9)].map((e, index) => (
                    <Card key={index} index={index} />
                    ))}
            </GridWrapper>
        </div>
    );
}

function Card(props) {
    const { index } = props;

    return (
        <Wrapper>
            <Title>{ index + 1}</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 300px;
    width: 100%;
    height: 200px;
    background: white;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
`
const Title = styled.h1`
    font-weight: bold;
    color: black;
    text-align: center;
`

const GridWrapper = styled.div`
    display: grid;
    background: indianred;
    max-width: 1200px;
    height: 1000px;
    margin: 0 auto;
    place-content: center;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
`

export default GridLayout;