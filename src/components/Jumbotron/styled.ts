import styled from "styled-components"

export const Banner = styled.div`
    background-image: url("http://thumbs.dreamstime.com/x/retro-s-seamless-pattern-background-vintage-memphis-fashion-style-illustration-ideal-fabric-design-paper-print-website-57384167.jpg");
    color: white;
`

export const Heading = styled.h1`
    margin: auto;
    transform: rotate(10deg);
    font-size: 350%!important;
    
    padding: 2%;
    border: 1px solid white;
    width: 50%;
    border-radius: 80%;
    background-color: orangered;
    color: white !important;
    text-align: center;
`

export const Triangle = styled.div`
    width: 0; 
	height: 0; 
	border-left: 20px solid transparent;
	border-right: 50px solid transparent;
	position: relative;
    margin-left: 40%;
    transform: rotate(10deg);
	border-top: 60px solid orangered;
    margin-top: -1.8%;
`

export const Ghost = styled.button`
    opacity: 0;
    display: none;
`

export const Input = styled.input`
    width: 25%;
    height: 50px;
    font-size: 2em;
    text-align: center;

`

export const Button = styled.button`
    width: 25%;
    height: 45px;
    font-size: 1.25em;
    border: 1px solid grey;
    border-radius: 2%;

    :hover {
        background-color: gray;
        color: white;
        border: 1px solid black;
        cursor: pointer;
    }
`

export const SearchArea = styled.div`
    text-align: center;
`