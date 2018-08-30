import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  color: ${({ player }) =>
    player === 'x' ? 'hsla(6, 59%, 50%, 1)' : 'hsla(145, 63%, 32%, 1)'};
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  text-align: center;
  text-transform: uppercase;
`
// border-width function explanations
// pass props from square function and call it index then if index is divided by 3 and === to 2 return 0 else '2 px'
// pass props from square function and call it index then if index is less that 6 return '2px', else 0
// or have default 0

StyledSquare.displayName = 'StyledSquare'

export default function Square ({ index, player }) {
  return (
    <StyledSquare index={index} player={player}>
      {player}
    </StyledSquare>
  )
}
