import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';
export default function BottonBar() {
    return (
        <>
            <ProgressContent>
                <CircularProgressbarWithChildren value={75} background={true} backgroundPadding={7} strokeWidth={9} styles={{
                    path: {
                        stroke: `white`,
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25 turn)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: '#52B6FF',
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: '#FFFFFF',
                        fontSize: '18px',
                    },
                    background: {
                        fill: '#52B6FF',
                        width: '30px',
                    },
                }}
                >
                    <p>Hoje</p>
                </CircularProgressbarWithChildren>
            </ProgressContent>
            <Botton>
                <p>Hábitos</p>
                <p>Histórico</p>
            </Botton>
        </>
    )
}
const Botton = styled.div`
background-color:white;
width:100%;
height:70px;
position:fixed;
bottom:0;
left:0;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0 30px;
box-sizing:border-box;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`
const ProgressContent = styled.div`
width: 91px;
height:91px;
position:fixed;
bottom:10px;
left:calc(50% - 45px);
z-index:10;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom:10px;
}
`