import {Modal as MuiModal} from '@mui/material';

import { Button } from 'ui';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const styles = {
    cardStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        height: 197,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        
    },
    buttonStyle: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }
    
};


export const Modal = (props) => {
  return (
    <div>
          <MuiModal
              sx = {{padding: "20px"}}
              open={props.open}
              onClose={props.onClose}
        >
              <Card sx = {styles.cardStyle}>
              <CardHeader title= {props.description} />
                <CardContent>
                   {props.children}
                </CardContent>
                <CardActions sx = {styles.buttonStyle}>
                      <Button onClick={props.onClose}variant="outlined" size="small">Anuluj</Button>
                      <Button onClick={props.onSubmit} variant="contained"  size="small">Zapisz</Button>
                </CardActions>
            </Card>
      </MuiModal>
    </div>
  );
}
