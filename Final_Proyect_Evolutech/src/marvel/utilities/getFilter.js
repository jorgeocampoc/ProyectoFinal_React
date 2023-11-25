export const getFilter = ({tipo, name})=>{
    return (tipo === 'characters')? '&nameStartsWith='+name: '&titleStartsWith='+name;
}