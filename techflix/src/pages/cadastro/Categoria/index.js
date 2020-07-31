import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    // vindo um array ao fazer a variável entre []
    // está abrindo esse array

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        // chave: nome, descricao, bla, bli
        setValues({
          ...values,
          [chave]: valor, // nome: 'valor'
        })
      }
      
    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
      }


    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues({ valoresIniciais });

            }}>


                <FormField
                    label="Nome da Categoria:"
                    value={values.nome}
                    onChange={handleChange}
                    type="text"
                    name="nome" />

                <FormField
                    label="Descrição:"
                    value={values.nome}
                    onChange={handleChange}
                    type="textarea"
                    name="descricao" />

                <FormField
                    label="Cor:"
                    value={values.nome}
                    onChange={handleChange}
                    type="color"
                    name="cor" />

                {/* <div> */}
                    {/* 

                    <label>
                        Descrição
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label> */}


                    {/* <label>
                        Cor
            <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label> */}

                {/* </div> */}

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}+${indice}`}> {categoria.nome}</li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;