import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { api } from '../services/api'

interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

interface SideBarProps {
  genreId: number
  onSelectedGenre: (data: GenreResponseProps) => void
  handleClickButton: (id: number) => void
}

export function SideBar({
  onSelectedGenre,
  genreId,
  handleClickButton
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${genreId}`).then(response => {
      onSelectedGenre(response.data)
    })
  }, [genreId])

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
