import styled from "@emotion/styled";

export const MainModal = styled.div`
    background-color: rgba(255, 255, 255, .8);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
`

export const ModalContainer = styled.div`
    background-color: #111;
    width: 300px;
    padding: 10px 20px;
    height: 80vh;
    margin: 10vh auto;
    position: relative;
`

export const ModalButton = styled.button`
    background-color: #8206ba;
    border: none;
    padding: 7px !important;
    color: #efefef;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin-bottom: 32px;
    width: 35px;
    border-radius: 20px;
    position: absolute;
    right: 12px;

    &:hover {
        background-color: #630490;
    }
`
