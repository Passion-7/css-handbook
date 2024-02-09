import React from "react";
import styled from "styled-components";

export function StyledComponents() {
    return (
        <AppWrapper>
            <Title>Welcome to CodeSandbox</Title>
            <Caption>Start editing to see some magic happen!</Caption>
            <Caption>Thank you for watching!</Caption>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    text-align: center;
    font-family: sans-serif;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 40px;
`

const Caption = styled.h2`
    font-weight: bold;
    font-size: 20px;
    opacity: 0.7;
`