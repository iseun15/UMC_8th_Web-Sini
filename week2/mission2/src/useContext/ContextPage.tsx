import Navbar from './Navbar'
import ThemeContext from './ThemeContent'
import { ThemeProvider } from './ThemeProvider'

const ContextPage = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justigy-center">
        <Navbar />
        <main className='flex-1'>
          <ThemeContext />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default ContextPage
