import { NavLink } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/productos', label: 'Productos' },
  { path: '/chat', label: 'Chat en vivo' },
  { path: '/contacto', label: 'Contacto' }
]

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-9 py-5 shadow-sm">
      <h1 className="text-xl font-bold">Entrega Backend</h1>
      <div className="flex flex-wrap gap-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `rounded-md px-4 py-2 font-semibold no-underline ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
