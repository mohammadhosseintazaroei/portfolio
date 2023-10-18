import { type SxProps, type Theme } from '@mui/material';

const gitHubStyles: Record<string, SxProps<Theme>> = {
  gitHubStyles: {
    p: 5,
  },
  reposContainer: {
    mb: 5,
    background: '#161616',
    p: 2,
    borderRadius: 2,
    transition: '.2s',
    '&:hover': {
      background: '#101010',
      cursor: 'pointer',
    },
  },
  repoImage: {
    width: '100%',
    height: '100px',
  },
  repoTopics: {
    color: (theme) => theme.palette.neutral.light,
    mr: 2,
  },
  circle: {
    width: '10px',
    height: '10px',
    background: (theme) => theme.palette.primary.lightest,
    display: 'inline-block',
    mr: 1,
    borderRadius: 3,
  },
  repoName: {
    color: '#7c7786',
  },
  repoDescription: {
    color: (theme) => theme.palette.neutral.main,
  },
};

export default gitHubStyles;
