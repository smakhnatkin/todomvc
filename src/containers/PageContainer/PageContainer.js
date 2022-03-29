import { useSelector } from 'react-redux';
import { Page } from '../../components';
import { getHasTodos } from '../../selectors/todos';

export const PageContainer = () => {
    const hasList = useSelector(getHasTodos);

    return <Page hasList={hasList} />
}