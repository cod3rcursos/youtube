import Input from "../components/form/Input"
import Page from "../components/layout/Page"
import PageTitle from "../components/layout/PageTitle"
import Row from "../components/layout/Row"

export default function App() {
    return (
        <Page>
            <PageTitle main="Formulário" sub="Exemplo de Layout de Formulário" />
            <Row md={2}>
                <Input label="Código" placeholder='Código Curso' />
                <Input label="Nome" placeholder='Nome Curso' />
            </Row>
            
            <Row md={2} lg={4}>
                <Input label="Nível" placeholder='Nível' />
                <Input label="Imagem URL" placeholder='Imagem' />
                <Input label="Autores" placeholder='Autores' />
                <Input label="Temas" placeholder='Temas' />
            </Row>
        </Page>
    )
}