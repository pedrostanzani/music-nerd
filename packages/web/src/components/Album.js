import './Album.css';

const Album = ({ name, artist, id, onClick }) => {
  const coverSrc = `http://localhost:3001/api/cover/${id}`

  return (
    <div onClick={() => onClick(name)} className='album-card row'>
      <img className='album-cover' src={coverSrc} alt="Cover of a rock album." />
      <div className='album-info column'>
        <h3 className='album-title'>{name}</h3>
        <h4 className='album-artist'>{artist}</h4>
      </div>
    </div>
  )
}

export default Album;