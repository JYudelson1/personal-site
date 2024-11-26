import { Camera } from 'lucide-react';

import madResearch from './mad-research.json';
import dessertsOfWisdom from './desserts-of-wisdom.json';

export const projects = [
  madResearch,
  dessertsOfWisdom,
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByType = (type) => {
  return projects.filter(project => project.type === type);
};

const images = require.context('../../assets', true);

export const getProjectImage = (project) => {
    if (project.hasOwnProperty("image")) {
        let image = images(`./${project.image}`);
        return (<img src={image} className="w-7 h-7 mt-1" style={{"borderRadius": "5px"}} />)
    } else {
        return (<Camera className="w-0 h-0 mt-1" />)
    }
}