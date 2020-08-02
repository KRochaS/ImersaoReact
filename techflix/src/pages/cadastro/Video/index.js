import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField'
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import videos from '../../../repositories/videos';

function CadastroVideo() {
    const history = useHistory();

    const { handleChange, values } = useForm({

        titulo: '',
        url: '',
        categoria: ''


    });
    return (
        <PageDefault>
            <h1> Cadastro de Vídeo </h1>



            <form onSubmit={(event) => {
                event.preventDefault();
                // alert('video cadastrado com sucesso');

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1


                }).then(() => {
                    history.push('/');
                })

              

            }}>


                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />


                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />


                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />




                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
           </Link>

        </PageDefault>
    )
}

export default CadastroVideo;