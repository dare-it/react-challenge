import { ActionHeader } from '../../atoms/ActionHeader';
import { Button } from '../../atoms/Button';
import AddIcon from '@mui/icons-material/Add';
import { Card } from '../../atoms/Card';

export const Modal =()=>{
  return(
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title='Budżet'
          renderActions={() => <Button variant='contained' color='primary' startIcon={<AddIcon/>}>Zdefiniuj budżet </Button>}/>
          }
   />
  )
}