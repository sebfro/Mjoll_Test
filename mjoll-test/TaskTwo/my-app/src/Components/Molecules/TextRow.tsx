import React from 'react'
import styled from 'styled-components'

const TextRow: React.FC<{ text: string; }> = ({ text }) => {
  return (
    <RowCotntainer>
      <p>{text}</p>
    </RowCotntainer>
  )
}

export default TextRow

const RowCotntainer = styled.div`
  width: 94%;
  font-size: 14px;
  display: flex;
  justify-content: left;
  p {
    margin-top: 8px;
  }
`;
