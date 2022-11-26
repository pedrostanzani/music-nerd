const Album = ({ name, artist, onClick }) => {
  const style = {backgroundColor: '#598296', marginBottom: '8px', height: '32px'}

  return (
    <div style={style} onClick={() => onClick(name)}>
      <span>{name} by {artist}</span>
    </div>
  )
}

export default Album;