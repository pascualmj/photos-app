const formatLinkToRoute = (routeName, params) => {
  if (!params) return routeName;
  let link = routeName;
  for (let key in params) {
    link = link.replace(`:${key}`, params[key]);
  }
  return link;
};

export default formatLinkToRoute;
