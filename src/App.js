import { useFormik } from "formik";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { getCocktailByName } from "./services/cocktail";
import { useEffect, useState } from "react";

function App() {
  const [infoCocktail, setInfoCocktail] = useState([]);

  const [addCocktail, setaddCocktail] = useState({});

  // useEffect(() => {

  // }, [addCocktail])

  const formik = useFormik({
    initialValues: {
      nameCocktail: "",
    },
    onSubmit: async () => {
      setInfoCocktail(await getCocktailByName(nameCocktail));
    },
  });

  const { nameCocktail } = formik.values;
  console.log(infoCocktail);

  const addDrink = (id, name) => {
    if (id) {
      setaddCocktail({ ...addCocktail, [id]: name});
    }
    console.log(addCocktail);
  };

  const deleteDrink = (id, name) => {
    if (id) {
      setaddCocktail({ ...addCocktail, [id]: name});
    }
    console.log(addCocktail);
  };

  return (
    <>
      {infoCocktail.length > 0 ? (
        <div className="row m-3">
          <form className="row g-3" onSubmit={formik.handleSubmit}>
            <div className="col-auto">
              <label htmlFor="nameCocktail" className="visually-hidden">
                Email
              </label>
              <input
                type="text"
                className="form-control-plaintext"
                name="nameCocktail"
                id="nameCocktail"
                value={nameCocktail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Search
              </button>
            </div>
          </form>
          {infoCocktail.map((ic, index) => (
            <div className="col-sm-6 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lista de cocteles</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">Nombre</h6>
                      <p className="card-text">{ic.strDrink}</p>
                    </li>
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">Tags</h6>
                      <p className="card-text">
                        {ic.strTags ? ic.strTags : "No se encuentra en la API"}
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Instrucciones
                      </h6>
                      <p className="card-text">{ic.strInstructions}</p>
                    </li>
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Vaso / Copa
                      </h6>
                      <p className="card-text">{ic.strGlass}</p>
                    </li>
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Categoria
                      </h6>
                      <p className="card-text">{ic.strCategory}</p>
                    </li>
                  </ul>
                  <h6 className="card-subtitle mb-2 text-muted"></h6>
                  <p className="card-text"></p>
                  <a
                    className="btn btn-primary"
                    onClick={() => addDrink(ic.idDrink, ic.strDrink)}
                  >
                    Agregar
                  </a>
                </div>
              </div>
            </div>
          ))}
          {addCocktail.length > 0 ? (
            addCocktail.map((ac,index)=>(

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pedido</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted"></h6>
                      <a className="btn btn-primary">Quitar</a>
                    </li>
                  </ul>
                  <a className="btn btn-primary">Orden</a>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pedido</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">{}</h6>
                      <a className="btn btn-primary">Go somewhere</a>
                    </li>
                  </ul>
                  <a className="btn btn-primary">Orden</a>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="row">
          <form className="row g-3" onSubmit={formik.handleSubmit}>
            <div className="col-auto">
              <label htmlFor="nameCocktail" className="visually-hidden">
                Email
              </label>
              <input
                type="text"
                className="form-control-plaintext"
                name="nameCocktail"
                id="nameCocktail"
                value={nameCocktail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Search
              </button>
            </div>
          </form>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lista de cocteles</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">Nombre</h6>
                    <p className="card-text">{}</p>
                  </li>
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">Tags</h6>
                    <p className="card-text">{}</p>
                  </li>
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Instrucciones
                    </h6>
                    <p className="card-text">{}</p>
                  </li>
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Vaso / Copa
                    </h6>
                    <p className="card-text">{}</p>
                  </li>
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">Categoria</h6>
                    <p className="card-text">{}</p>
                  </li>
                </ul>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text"></p>
                <a className="btn btn-primary">Agregar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pedido</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h6 className="card-subtitle mb-2 text-muted">{}</h6>
                    <a className="btn btn-primary">Go somewhere</a>
                  </li>
                </ul>
                <a className="btn btn-primary">Orden</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
