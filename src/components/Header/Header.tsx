import './Header.css'

interface IHeader {
  titulo: string
}

export const Header  = ({titulo}:IHeader) => {
  return(
    <h1 className='header'>
      {titulo}
    </h1>
  )
}
