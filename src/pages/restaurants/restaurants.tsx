import { InputSearch } from '../../shared/components/input-search/InputSearch';
import { Nav } from './../../shared/components/nav/Nav';
import './restaurants.scss';

export const Restaurants = () => {
    return (
        <>
            <Nav />
            <header>
                <h1>Bem vindo ao Lista Rango</h1>
                <InputSearch prefixName="Buscar estabelecimento" />

            </header>

            <p className="fontRegular">Fonte Regular</p>
            <p className="fontMedium">Fonte Medium</p>
            <p className="fontSemibold">Fonte SemiBold</p>
            <p className="fontBold">Fonte Bold</p>

        </>
    )
}