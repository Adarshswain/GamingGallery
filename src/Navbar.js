
import styled from "styled-components";

import React, { useState } from "react";


const Container = styled.div`
display:flex;
flex-direction:column;
`;
const Header = styled.div`
// display:flex;
flex-direction:row;
background-color:blue;
color:white;
padding:10px;
font-size:40px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;


justify-content: center;


`;
const AppName = styled.div`
display:flex;
allign-item:center;
justify-content:center;


`;

const SearchBox = styled.div`
display:flex;
flex-direction:row;
padding:10px 10px;
background-color:white;
border-radius:7px;
margin-left:1000px;
width:20%;
allign-item:center;
position:fixed; 
 top:10px;



`;
const SearchIcon = styled.img`
width:32px;
height:32px;
`;
const SearchInput = styled.input`
color:black;
font-size:16px;
font-weight:bold;
border:none;
outline:none;
margin-left:15px;
`;
const MovieListContainer = styled.div`

display:flex;
flex-direction:row;

padding:30px;
gap:24px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const MovieContainer = styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor:pointer;

`;
const CoverImage = styled.img`
height:362px;
object-fit:cover;
`;
const MovieName = styled.span`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
`;
const InfoColumn = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
const MovieInfo = styled.span`
font-size:16px;
font-weight:500;
color:black;

white-space:nowrap;
overflow:hidden;
text-transform:capitalize;


`;

function Navbar() {



    return (

        <Container>
            <Header>


                <AppName>The Gaming Gallery</AppName>


            </Header>


        </Container>








    );
}

export default Navbar;
