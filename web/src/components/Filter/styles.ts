import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;

  background:inherit;
  border: 1px solid #ccc;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  padding:5px;
  width: 100%;
  min-height: 55px;
  &:hover{
    color:#fc8403;
    cursor: pointer;
  }

  span{
    display:flex;
    justify-content:center;
  }

  strong.selected-value {
    display:flex;
    justify-content:center;
    transition: all 200ms ease;
  }

  .options {
    display: none;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .options.open {
    display: block;

    .option:nth-child(odd){
      background:#e3e3e3;
    }
  }

  .option {
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    height:30px;
    padding: 5px;
  }

  .option.selected,
  .option:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`;