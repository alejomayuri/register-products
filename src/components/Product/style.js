import styled from "@emotion/styled";

export const ProductElement = styled.div`
    width: 230px;
    padding: 10px;
    background: #252525;
    box-shadow: 0px 0px 5px 1px #3e3e3e;
    margin: 20px;
    position: relative;
`

export const ProductButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: #8106baaf;
    color: #fff;
    padding: 5px;
    border: none;
    border-radius: 25px;
    height: 25px;
    width: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #8206ba;
    }
`

export const ProductTitle = styled.h3`
    text-transform: uppercase;
    font-size: 23px;
    margin: 0 0 10px 0;
`

export const ProductImage = styled.img`
    width: 100%;
    height: 230px;
    background: #414141;
`

export const ProductDescription = styled.p`
    font-size: 15px;
    text-align: left;
`

export const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    text-align: left;
`
