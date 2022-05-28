import styled from "@emotion/styled";

export const FormButtonElement = styled.input`
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    background-color: #8206ba;
    border: none;
    padding: 7px !important;
    color: #efefef;
    cursor: pointer;

    &:hover {
        background-color: #630490;
    }

    &:disabled {
        background-color: #910202;
    }
`