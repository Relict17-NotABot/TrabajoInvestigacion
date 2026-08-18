import { Link, useLocation } from "react-router";

const nombres = {
  example1: "Ejemplo 1",
  importancia: "Importancia",
  impacto: "Impacto",
};

export function BreadCrumbs() {
  const location = useLocation();
  const rutas = location.pathname.split("/").filter((r) => r !== "");

  return (
    <nav aria-label="Ruta de navegación" className="mb-6">
      <ol className="flex list-none flex-wrap gap-2 p-0 text-sm">
        <li>
          {rutas.length === 0 ? (
            <span aria-current="page" className="font-semibold text-blue-950">Inicio</span>
          ) : (
            <Link
              to="/"
              className="rounded-sm text-blue-800 underline underline-offset-4 hover:text-blue-950 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Inicio
            </Link>
          )}
        </li>
        {rutas.map((ruta, index) => {
          const rutaCompleta = "/" + rutas.slice(0, index + 1).join("/");
          const esUltima = index === rutas.length - 1;
          const nombreVisible = nombres[ruta] || ruta;

          return (
            <li key={rutaCompleta} className="flex gap-2">
              <span aria-hidden="true">/</span>
              {esUltima ? (
                <span aria-current="page" className="font-semibold text-blue-950">{nombreVisible}</span>
              ) : (
                <Link
                  to={rutaCompleta}
                  className="rounded-sm text-blue-800 underline underline-offset-4 hover:text-blue-950 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  {nombreVisible}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

