import * as S from './style.jsx'

// eslint-disable-next-line react/prop-types
const FilterCard = ({title, actived}) => {
  return (
    <S.Container actived={actived}>
        <p>{title}</p>
    </S.Container>
  )
}

export default FilterCard