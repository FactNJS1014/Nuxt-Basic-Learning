export default defineEventHandler((event) => {
  const query = getQuery(event);
  return {
    name: query.name,
    email: query.email
  }
})