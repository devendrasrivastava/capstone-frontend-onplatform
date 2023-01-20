import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 600, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://source.unsplash.com/900x600/?school',
    title: 'Education',
    author: '@EducationLoan',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://source.unsplash.com/900x600/?kids',
    title: 'Saving Account for Kids',
    author: '@KidsSaverAccount',
  },
  {
    img: 'https://source.unsplash.com/900x600/?infra',
    title: 'Businesses',
    author: '@CommercialLoan',
  },
  {
    img: 'https://source.unsplash.com/900x600/?bank',
    title: 'Mortgage',
    author: '@FlexiEMIMortgage',
    cols: 2,
  },
     
];