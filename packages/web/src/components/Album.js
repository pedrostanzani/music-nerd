import './Album.css';

import AlbumCover from './../assets/TBHC.jpg';

const Album = ({ name, artist, onClick }) => {
  return (
    <div onClick={() => onClick(name)} className='album-card row'>
      <img className='album-cover' src={AlbumCover} alt="Cover of a rock album." />
      <div className='album-info column'>
        <h3 className='album-title'>{name}</h3>
        <h4 className='album-artist'>{artist}</h4>
      </div>
    </div>
  )
}

export default Album;