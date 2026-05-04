function Productos() {
  return (
    <section className="rounded-lg border border-cyan-200 bg-cyan-50 p-8">
      <h2 className="mb-3 text-2xl font-bold text-cyan-800">Productos</h2>
      <p>Esta pagina muestra una seccion distinta para los productos del proyecto.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>Producto principal</li>
        <li>Detalle de funcionalidades</li>
        <li>Opciones disponibles</li>
      </ul>
    </section>
  )
}

export default Productos
