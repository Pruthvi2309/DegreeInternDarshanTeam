import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Addproduct() {
  return (
    <Wrapper>
        <section>
            <header className='header1'>
            <div className="logoContent1">
                <Link to='/' className="logo"><img src="images/logo.png" alt="Logo"/></Link>
                <h1 className="logoName">Daily Delights</h1>
                <div className='logout'>
                <box-icon name='log-out'></box-icon>
                </div>
            </div>

            </header>
            <div className='add'>
                <h3>Add your Cake & Pastries</h3>
            </div>
            
            
        </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.header1{
    top: 0;
    background-color: transparent;
    background-color: #30ddf8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: sticky; */
    position: relative;
    padding: 10px;
    z-index: 999;
}
.header1 .logoContent1{
    display: flex;
    align-items: center;
}
.header1 .logoContent1 .logo img{
    height: 25px;
}
.header1 .logoContent1 .logoName {
  margin-top: 10px;
    color: black;
    font-size: 15px;
    font-weight: bolder;
}
h3{
    // position: absolute;
    color:red;
    text-align:center;
}

     .logout{
    // display: flex;
    // flex-direcion: row;
    // align-items:right;    
    // float: right;
    margin-left: 65rem;
    
}
`;

export default Addproduct;