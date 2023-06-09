export const linesCatalog = {
  Tokyo: {
    JR: ["Yamanote Line", "Chuo Line"],
    Metro: ["Yurakucho Line", "Ginza Line"],
    Tokyu: ["Ikegami Line"],
  },
  Heerlen: {
    Arriva: ["Heuvellandlijn"],
    NS: ["Noa Zitterd"],
  },
};

export const getCities = () => {
  return Object.keys(linesCatalog);
};

export const getGroupsForCity = (city) => {
  return Object.keys(linesCatalog[city]);
};

export const getLinesForGroup = (city, group) => {
  return linesCatalog[city][group];
};
