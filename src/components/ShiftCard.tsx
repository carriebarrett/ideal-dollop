import React, { Fragment } from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';
import Shift from '../models/Shift';
import dayjs from 'dayjs';

const ShiftCard = (shift: Shift) => {
  return (
    <ListItem alignItems='flex-start'>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='work-icon'
        sx={{ mr: 2 }}
      >
        <WorkIcon />
      </IconButton>
      <ListItemText
        primary={`${shift.title} - ${dayjs(shift.date).format('MM/DD/YYYY')}`}
        secondary={
          <Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {shift.student}
            </Typography>
            {` - ${shift.description}`}
          </Fragment>
        }
      />
    </ListItem>
  )
}

export default ShiftCard
