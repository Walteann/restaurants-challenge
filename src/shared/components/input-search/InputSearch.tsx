import './inputSearch.scss';
import SearchIcon from '@material-ui/icons/Search'
import { InputSearchProps } from '../../interfaces/InputSearchProps';

export const InputSearch = (props: InputSearchProps) => {
    return (
        <div className="input-search">
            <span className="input-search__prefix">{props.prefixName}</span>
            <input className="input-search__input" type="text" placeholder="meuInput" />
            <span className="input-search__sufixIcon">
                <SearchIcon />
            </span>
        </div>
    ) 
};
