import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io(); // Conectar al servidor Socket.IO

function Chat() {
  const [nombre, setNombre] = useState('')
  const [texto, setTexto] = useState('')
  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    // Cuando llega un mensaje del servidor, lo agregamos al chat.
    socket.on('mensaje_chat', (mensaje) => {
      setMensajes((mensajesActuales) => [...mensajesActuales, mensaje])
    })

    // Limpiamos el evento para evitar escuchas repetidas.
    return () => {
      socket.off('mensaje_chat')
    }
  }, [])

  const enviarMensaje = () => {
    // Evitamos mandar mensajes vacios.
    if (texto.trim() === '') return

    // Mandamos el mensaje al servidor.
    socket.emit('mensaje_chat', {
      nombre: nombre.trim() || 'Anonimo',
      texto: texto.trim()
    })

    // Limpiamos el textarea despues de enviar.
    setTexto('')
  }

  const manejarTecla = (evento) => {
    // Enter envia el mensaje. Shift + Enter permite escribir en otra linea.
    if (evento.key === 'Enter' && !evento.shiftKey) {
      evento.preventDefault()
      enviarMensaje()
    }
  }

  return (
    <section className="mx-auto flex h-[calc(100vh-10rem)] max-w-3xl flex-col overflow-hidden rounded-lg border border-slate-300 bg-[#efeae2] shadow-md">
      <header className="flex items-center gap-4 bg-emerald-700 px-5 py-4 text-white">
        <div className="flex size-11 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold">
          C
        </div>
        <div>
          <h2 className="text-lg font-bold">Chat en vivo</h2>
        </div>
      </header>

      <div className="bg-emerald-50 px-5 py-3 text-center text-sm font-medium text-emerald-800 transition hover:bg-emerald-100">
        Bienvenido al chat en vivo
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-5">
        {mensajes.map((mensaje) => {
          const esMiMensaje = mensaje.autorId === socket.id

          return (
            <div
              key={mensaje.id}
              className={`max-w-[75%] rounded-lg px-4 py-3 text-sm shadow-sm ${
                esMiMensaje
                  ? 'ml-auto rounded-tr-none bg-emerald-100 text-slate-800'
                  : 'rounded-tl-none bg-white text-slate-800'
              }`}
            >
              <p className="mb-1 font-semibold text-emerald-800">{mensaje.nombre}</p>
              <p>{mensaje.texto}</p>
              <p className="mt-1 text-right text-xs text-slate-500">{mensaje.hora}</p>
            </div>
          )
        })}
      </div>

      <div className="border-t border-slate-300 bg-slate-100 p-4">
        <input
          className="mb-3 w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />

        <div className="flex gap-3">
          <textarea
            className="max-h-28 min-h-12 flex-1 resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Escribi tu mensaje"
            id="mensaje"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            onKeyDown={manejarTecla}
          />

          <button
            className="self-end rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
            onClick={enviarMensaje}
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Chat
