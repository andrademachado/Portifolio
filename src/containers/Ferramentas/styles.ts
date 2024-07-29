import styled from "styled-components"

export const Icon = styled.div`
    margin-top: 0;
    margin-bottom: 64px;
    display: flex;   
    margin-right: 100px;
    
    img{
               
        margin-left: 18px;
        width: 40px;
        
       
        
    }
     @media (max-width:768px){
        grid-template-columns: 1fr 1fr;
        column-gap: 0;
        row-gap: 160px;
        img{
            margin-left: 2px;
            width: 24px;
        }

    }
`

export const Contact = styled.div`
    margin-top: 32px;
    margin-bottom: 64px;
    display: flex;
    cursor: pointer;

    img{
        height: 45px;
        width: 45px;
        margin-left: 10px;
    }
`
