import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarAdmin from "../../../components/navBarAdmin/NavBarAdmin";
import { ruteAdmin } from "../../../constants/rute";

const ListaProduse = () => {
  const [productdata, productdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/produse/detalii/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/produse/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Vrei sa stergi produsul")) {
      fetch("http://localhost:3005/produse/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Produs sters cu succes.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3005/produse")
      .then((res) => res.json())
      .then((resp) => {
        productdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <NavBarAdmin
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      ></NavBarAdmin>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Lista Produse</h2>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <Link to="/adauga/produse" className="btn btn-success">
                Adauga produs (+)
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>Nume</th>
                  <th>Categorie</th>
                  <th>Pret</th>
                  <th>Actiune</th>
                </tr>
              </thead>
              <tbody>
                {productdata &&
                  productdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <div className="btn-group" role="group">
                          <button
                            onClick={() => LoadEdit(item.id)}
                            className="btn btn-success"
                          >
                            Editeaza
                          </button>
                          <button
                            onClick={() => Removefunction(item.id)}
                            className="btn btn-danger"
                          >
                            Sterge
                          </button>
                          <button
                            onClick={() => LoadDetail(item.id)}
                            className="btn btn-primary"
                          >
                            Detalii
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaProduse;
