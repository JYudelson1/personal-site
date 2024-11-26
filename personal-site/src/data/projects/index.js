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