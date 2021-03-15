import { useState } from 'react'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

import './styles/global.scss'

import './styles/sidebar.scss'
import './styles/content.scss'

interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  const [selectedGenreId, setSelectedGenreId] = useState(1)

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genreId={selectedGenreId}
        handleClickButton={handleClickButton}
        onSelectedGenre={setSelectedGenre}
      />

      <Content genreId={selectedGenreId} genreTitle={selectedGenre.title} />
    </div>
  )
}
