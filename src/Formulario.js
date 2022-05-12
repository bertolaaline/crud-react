import axios from "axios";
import { useEffect, useState } from "react";

// $ curl https://api.airtable.com/v0/apptGOeGo7k25YE3m/Table%201 \
// -H "Authorization: Bearer keyNkAzl2oSWmnZ3V"

function Formulario() {
    const salvarUsuarios = () => {
      axios.post("https://api.airtable.com/v0/apptGOeGo7k25YE3m/Table%201", {
          records: [
            {
              fields: {
                'name': nome,
                'email': email,
                'password': senha
              }
            },
          ]
      },
      {
        headers: {
          'Authorization': 'Bearer keyNkAzl2oSWmnZ3V',
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      ).then(response => console.log(response.data)).catch(e => console.log(e))
    }

    const [nome, setNome] = useState ([]);
    const [email, setEmail] = useState ([]);
    const [senha, setSenha] = useState ([]);

    return (
       <div>
          <h1>Cadastro</h1>

        <div className="card">

          <form className="formulario" onSubmit={ e =>{
            console.log("passei aqui")
            e.preventDefault();
            salvarUsuarios();
          }}>
              <label>Nome:</label>
              <input onChange={(e) => setNome(e.target.value)} type="text" id="nome" name="nome" placeholder="Ex:Aline" required/>
        
              <label>Email:</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Ex:bertola.aline@gmail.com" required/>

              <label>Senha:</label>
              <input onChange={(e) => setSenha(e.target.value)} type="password" id="senha" name="senha" placeholder="Ex:****" required/>

              <button type="submit">Enviar</button>
          </form>

        </div>

       </div> 
    );
}

export default Formulario;