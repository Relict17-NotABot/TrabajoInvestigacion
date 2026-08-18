import { Link, useLocation } from "react-router";

const nombres = {
  importancia: "Importancia",
  tecnicas: "Técnicas",
};

export function BreadCrumbs() {
  const location = useLocation();
  const rutas = location.pathname.split("/").filter((r) => r !== "");

  return (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {rutas.map((ruta, index) => {
          const rutaCompleta = "/" + rutas.slice(0, index + 1).join("/");
          const esUltima = index === rutas.length - 1;
          const nombreVisible = nombres[ruta] || ruta;

          return (
            <li key={rutaCompleta} style={{ display: "flex", gap: "8px" }}>
              <span aria-hidden="true">/</span>
              {esUltima ? (
                <span aria-current="page">{nombreVisible}</span>
              ) : (
                <Link to={rutaCompleta}>{nombreVisible}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

